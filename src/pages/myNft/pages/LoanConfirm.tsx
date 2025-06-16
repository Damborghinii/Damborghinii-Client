/* eslint-disable no-constant-binary-expression */
import styled from "@emotion/styled";
import { LoanInfo, LoanInfoProps } from "../_components/LoanInfo";
import { HorizontalDivider } from "@components/common/horizontalDivider/HorizontalDivider";
import Spacer from "@components/common/spacer/Spacer";
import { ConfirmNoticeSection } from "../_components/ConfirmNoticeSection";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLoanConfirm, postLoan } from "@apis/loan";
import { useModal } from "@hooks/useModal";

export const LoanConfirm = () => {
  const navigate = useNavigate();
  const { loanId, contractId } = useParams();
  const { openModal, closeModal } = useModal();
  const [loanInfo, setLoanInfo] = useState<LoanInfoProps>({
    loanAmount: "",
    monthlyInterest: "",
    repaymentMethod: "",
    annualInterestRate: "",
    totalRepaymentAmount: "",
    delinquencyRate: "",
    loanPeriod: "",
    repaymentRounds: "",
    imageUrl: "",
    nftName: "",
    nftPrice: "",
    realPrice: "",
  });
  console.log(loanInfo);

  useEffect(() => {
    const fetchData = async () => {
      if (!contractId) return;

      const res = await getLoanConfirm(
        Number(contractId),
        Number(localStorage.getItem("amount")) ?? 10000,
        Number(localStorage.getItem("count")) ?? 12
      );
      if (res.success && res.data) {
        const { loanCondition, copyright } = res.data;

        setLoanInfo({
          loanAmount: loanCondition.loanAmount ?? "",
          monthlyInterest: loanCondition.monthlyInterest ?? "",
          repaymentMethod: loanCondition.loanType ?? "",
          annualInterestRate: loanCondition.interestRate ?? "",
          totalRepaymentAmount: loanCondition.totalPayment ?? "",
          delinquencyRate: loanCondition.overdueRate ?? "",
          loanPeriod: loanCondition.loanPeriod ?? "",
          repaymentRounds: loanCondition.repaymentCount ?? "",
          imageUrl: copyright.imageUrl ?? "",
          nftName: copyright.title ?? "",
          nftPrice: copyright.ethPrice ?? "",
          realPrice: copyright.wonPrice ?? "",
        });
      }
    };

    fetchData();
  }, [contractId]);

  const handleClick = () => {
    if (!loanId) return;

    openModal({
      title: "정말 대출을 신청하시겠습니까?",
      sub: "신청 후에는 수정이 불가능합니다.",
      primaryButton: {
        children: "취소",
        onClick: closeModal,
      },
      secondButton: {
        children: "확인",
        onClick: async () => {
          closeModal();

          await postLoan(
            Number(contractId),
            Number(localStorage.getItem("amount")) ?? 10000,
            Number(localStorage.getItem("count")) ?? 12
          );

          navigate("/myNft");
        },
      },
    });
  };

  return (
    <MainWrapper>
      <CheckSection>
        <Title>최종 정보를 확인해 주세요.</Title>
        <Spacer height="2.5rem" />

        <LoanInfo {...loanInfo} />
      </CheckSection>
      <HorizontalDivider />
      <ConfirmNoticeSection onClick={handleClick} />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  width: 100%;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.typography["body1-1"]}
  color: ${({ theme }) => theme.color.neutral.B60};
`;

const CheckSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 1.875rem;
`;
