import styled from "@emotion/styled";
import { AdjustmentCard } from "../_components/AdjustmentCard";
import { AdjustmentTab } from "../_components/AdjustmentTabBar";
import { BottomSection } from "../_components/BottomSection";
import { useEffect, useState, useCallback } from "react";
import {
  AdjustmentInfo,
  getAdjustmentInfo,
  // patchRepaymentContract,
} from "@apis/adjustment";
import { RepaymentStatus, useTabBar } from "@pages/_hooks/useTabBar";
import { useModal } from "@hooks/useModal";
import BottomNavBar from "@components/common/bottomNavBar/BottomNavBar";

export const GivingAdjustment = () => {
  const { tabstatus, setTabStatus } = useTabBar();
  const [updateFlag, setUpdateFlag] = useState<boolean>(false);
  const { openModal, closeModal } = useModal();

  const [adjustmentInfo, setAdjustmentInfo] = useState<AdjustmentInfo>({
    cash: 0,
    totalContracts: 0,
    totalAmount: 0,
    repaymentSchedules: {
      repaymentScheduleList: [],
    },
  });

  // fetchData를 useCallback으로 감싸서 의존성 문제 해결
  const fetchData = useCallback(async () => {
    try {
      const res = await getAdjustmentInfo({
        status: tabstatus,
        role: "LENDER",
      });
      if (res.success && res.data) {
        setAdjustmentInfo(res.data);
      }
    } catch (error) {
      console.error("Failed to fetch adjustment info:", error);
    }
  }, [tabstatus]);

  useEffect(() => {
    fetchData();
  }, [fetchData, updateFlag]);

  // 상환 처리 함수
  const handleRepayment = useCallback(async () => {
    openModal({
      title: "정말 상환하시겠습니까?",
      sub: "신청 후에는 수정이 불가능합니다.",
      primaryButton: {
        children: "취소",
        onClick: closeModal,
      },
      secondButton: {
        children: "확인",
        onClick: async () => {
          closeModal();

          try {
            // TODO: 실제 상환 API 호출
            // await patchRepaymentContract(scheduleId);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setUpdateFlag((prev) => !prev);
          } catch (error) {
            console.error("Repayment failed:", error);
            // 에러 처리 로직 추가
          }
        },
      },
    });
  }, [openModal, closeModal]);

  // 상환 가능한 상태인지 확인
  const canRepay = tabstatus === "UPCOMING" || tabstatus === "OVERDUE";

  return (
    <Wrapper>
      <AdjustmentCard
        balance={`${adjustmentInfo.cash?.toLocaleString()}원`}
        totalContracts={adjustmentInfo?.totalContracts.toLocaleString()}
        totalAmount={adjustmentInfo?.totalAmount.toLocaleString()}
        isReceivedType={false}
        onClick={canRepay ? handleRepayment : undefined}
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
            총 {adjustmentInfo?.totalAmount.toLocaleString()}원
          </BodyText>
        </RowInfo>
        {adjustmentInfo.repaymentSchedules.repaymentScheduleList.length > 0 &&
          adjustmentInfo.repaymentSchedules.repaymentScheduleList.map(
            (item, index) => (
              <BottomSection
                status={tabstatus}
                schedule={item}
                key={item.repaymentScheduleId || index}
                onClick={undefined}
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

const BottomBarWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 540px;
  height: 65px;
  z-index: 10;
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
  color: ${({ theme }) => theme.color.primary.P50};
`;
