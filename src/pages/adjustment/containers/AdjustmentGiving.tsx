import styled from "@emotion/styled";

import { AdjustmentCard } from "../_components/AdjustmentCard";
import { AdjustmentTab } from "../_components/AdjustmentTabBar";
import { BottomSection } from "../_components/BottomSection";
import { useEffect, useState } from "react";
import {
  AdjustmentInfo,
  getAdjustmentInfo,
  patchRepaymentContract,
} from "@apis/adjustment";
import { RepaymentStatus, useTabBar } from "@pages/_hooks/useTabBar";

// import { AdjustmentParamsType } from "@apis/adjustment";
export const GivingAdjustment = () => {
  const { tabstatus, setTabStatus } = useTabBar();
  const [_, setTotalAmount] = useState<number>(0);
  const [updateFlag, setUpdateFlag] = useState<boolean>(false);

  const [adjustmentInfo, setAdjustmentInfo] = useState<AdjustmentInfo>({
    cash: 0,
    totalContracts: 0,
    totalAmount: 0,
    repaymentSchedules: {
      repaymentScheduleList: [],
    },
  });

  const fetchData = async () => {
    const res = await getAdjustmentInfo({ status: tabstatus, role: "LENDER" });
    if (res.success && res.data) {
      setAdjustmentInfo(res.data);
      const totalRepaymentAmount =
        adjustmentInfo.repaymentSchedules.repaymentScheduleList.reduce(
          (acc, cur) => acc + cur.repaymentAmount,
          0
        );
      setTotalAmount(totalRepaymentAmount);
    }
  };
  useEffect(() => {
    fetchData();
  }, [tabstatus, updateFlag]);

  return (
    <Wrapper>
      <AdjustmentCard
        balance={`${adjustmentInfo.cash.toLocaleString()}원`}
        totalContracts={adjustmentInfo.totalContracts.toLocaleString()}
        totalAmount={adjustmentInfo.totalAmount.toLocaleString()}
        isReceivedType={false}
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
          <BodyText>
            총 {adjustmentInfo.totalAmount.toLocaleString()}원
          </BodyText>
        </RowInfo>
        {adjustmentInfo.repaymentSchedules.repaymentScheduleList.length > 0 &&
          adjustmentInfo.repaymentSchedules.repaymentScheduleList.map(
            (item, index) => (
              <BottomSection
                status={tabstatus}
                schedule={item}
                key={item.repaymentScheduleId || index}
                onClick={async () => {
                  const confirm = window.confirm("상환하시겠습니까?");
                  if (confirm) {
                    await patchRepaymentContract(item.repaymentScheduleId);
                    setUpdateFlag(!updateFlag);
                    alert("상환이 완료되었습니다.");
                  }
                }}
              />
            )
          )}
      </BottomWrapper>
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

  background-color: ${({ theme }) => theme.color.neutral.B00};
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

/**
  <BottomSection
          schedule={{
            repaymentScheduleId: 0,
            totalRepaymentAmount: 1000000,
            repaymentAmount: 800000,
            interestRate: 5,
            lateFee: 0,
            round: 1,
            repaymentDate: "2025-06-25",
            settlementDate: "2025-06-30",
            relativeDays: "7일 남았어요",
            nftImageUrl: "",
            nftName: "Mock NFT #0000",
            stake: 15,
            ethPrice: 3500,
          }}
        />
 */
