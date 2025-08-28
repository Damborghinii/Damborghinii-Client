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
  const [adjustmentInfo, setAdjustmentInfo] = useState<AdjustmentInfo>({
    cash: 0,
    totalContracts: 0,
    totalAmount: 0,
    repaymentSchedules: {
      repaymentScheduleList: [],
    },
  });

  // totalAmount를 계산된 값으로 관리
  const totalAmount =
    adjustmentInfo.repaymentSchedules.repaymentScheduleList.reduce(
      (acc, cur) => acc + cur.repaymentAmount,
      0
    );

  const fetchData = async () => {
    try {
      const res = await getAdjustmentInfo({
        status: tabstatus,
        role: "BORROWER",
      });

      if (res.success && res.data) {
        setAdjustmentInfo(res.data);

        // 디버깅용 로그
        const calculatedTotal =
          res.data.repaymentSchedules.repaymentScheduleList.reduce(
            (acc, cur) => acc + cur.repaymentAmount,
            0
          );
        console.log("탭 상태:", tabstatus);
        console.log(
          "스케줄 리스트:",
          res.data.repaymentSchedules.repaymentScheduleList
        );
        console.log("계산된 총액:", calculatedTotal);
      }
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
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

// 스타일 컴포넌트들은 동일
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
  padding-bottom: 2rem;
`;

const RowInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0 20px;
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
