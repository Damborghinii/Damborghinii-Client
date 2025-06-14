import { SubTopBar } from "@components/common/topBar/SubTopBar";
import styled from "@emotion/styled";
import { LoanInfo, LoanInfoProps } from "../_components/LoanInfo";
import { HorizontalDivider } from "@components/common/horizontalDivider/HorizontalDivider";
import { cardImage } from "@assets/image";
import Spacer from "@components/common/spacer/Spacer";
import { ConfirmNoticeSection } from "../_components/ConfirmNoticeSection";

const MOCK_LOAN_INFO: LoanInfoProps = {
  loanAmount: "10,000,000원",
  monthlyInterest: "250,000원",
  repaymentMethod: "만기일시상환",
  annualInterestRate: "30%",
  totalRepaymentAmount: "13,000,000원",
  delinquencyRate: "5%",
  loanPeriod: "1년",
  repaymentRounds: "12회차",
  imageUrl: cardImage,
  nftName: "Lil Pudgy #2017",
  nftPrice: "2299ETH",
  realPrice: "28,495,433원",
};

export const LoanConfirm = () => {
  return (
    <MainWrapper>
      <SubTopBar title="대출 확정" />
      <CheckSection>
        <Title>최종 정보를 확인해 주세요.</Title>
        <Spacer height="2.5rem" />

        <LoanInfo {...MOCK_LOAN_INFO} />
      </CheckSection>
      <HorizontalDivider />
      <ConfirmNoticeSection onClick={() => alert("뚝딱뚝딱 공사중")} />
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
  /* justify-content: center; */
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
