import styled from "@emotion/styled";
import { AdjustmentCard } from "../_components/AdjustmentCard";
import { AdjustmentTab } from "../_components/AdjustmentTabBar";
import { BottomSection } from "../_components/BottomSection";
import { useEffect, useState } from "react";
import { RepaymentStatus, useTabBar } from "@pages/_hooks/useTabBar";
import { getAdjustmentInfo, AdjustmentInfo } from "@apis/adjustment";
import BottomNavBar from "@components/common/bottomNavBar/BottomNavBar";

export const AdjustmentReceived = () => {
  const { tabstatus, setTabStatus } = useTabBar();
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const [adjustmentInfo, setAdjustmentInfo] = useState<AdjustmentInfo>({
    cash: 0,
    totalContracts: 0,
    totalAmount: 0,
    repaymentSchedules: {
      repaymentScheduleList: [],
    },
  });
  const fetchData = async () => {
    const res = await getAdjustmentInfo({
      status: tabstatus,
      role: "BORROWER",
    });
    if (res.success && res.data) {
      setAdjustmentInfo(res.data);
      const totalRepaymentAmount =
        adjustmentInfo.repaymentSchedules.repaymentScheduleList.reduce(
          (acc, cur) => acc + cur.repaymentAmount,
          0
        );
      console.log(totalRepaymentAmount);
      setTotalAmount(totalRepaymentAmount);
    }
  };
  useEffect(() => {
    fetchData();
  }, [tabstatus]);

  return (
    <Wrapper>
      <AdjustmentCard
        balance={`${adjustmentInfo.cash?.toLocaleString()}원`}
        totalContracts={adjustmentInfo?.totalContracts.toLocaleString()}
        totalAmount={adjustmentInfo?.totalAmount.toLocaleString()}
      />
      <AdjustmentTab
        tabStatus={tabstatus}
        onClick={(key) => setTabStatus(key as RepaymentStatus)}
      />
      <BottomWrapper>
        <RowInfo>
          {tabstatus === "UPCOMING"
            ? "상환예정"
            : tabstatus === "OVERDUE"
            ? "미상환"
            : "상환완료"}
          <BodyText>총 {totalAmount?.toLocaleString()}원</BodyText>
        </RowInfo>
        {adjustmentInfo.repaymentSchedules.repaymentScheduleList.length > 0 &&
          adjustmentInfo.repaymentSchedules.repaymentScheduleList.map(
            (item, index) => (
              <BottomSection
                status={tabstatus}
                schedule={item}
                key={item.repaymentScheduleId || index}
              />
            )
          )}
      </BottomWrapper>
      <BottomBarWrapper>
        <BottomNavBar />
      </BottomBarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100dvh;

  display: flex;
  flex-direction: column;
`;

const BottomWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 1.25rem;

  flex-grow: 1;

  padding: 0 1.5rem;
  padding-bottom: 2rem;
`;

const RowInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  gap: 0.75rem;

  padding-top: 1.25rem;

  ${({ theme }) => theme.typography["body1-2"]}
`;

const BodyText = styled.h2`
  padding-top: 0.1rem;
  ${({ theme }) => theme.typography["body2-2"]}

  color: ${({ theme }) => theme.color.primary.P50}
`;

const BottomBarWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 540px;
  height: 65px;
  z-index: 10;
`;
