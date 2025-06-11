import styled from "@emotion/styled";

import { SubTopBar } from "@components/common/topBar/SubTopBar";
import { useParams } from "react-router-dom";
import { LoanInfoCard, LoanInfoProps } from "./_components/LoanInfoCard";

export const InvestmentInfo = () => {
  const { investmentId } = useParams();
  console.log(investmentId);

  const DUMMY_LOAN: LoanInfoProps = {
    loanAmount: "1000원",
    monthlyInterest: "300원",
    repaymentMethod: "만기상환방식",
    annualInterestRate: "30%",
    totalRepaymentAmount: "0원",
    delinquencyRate: "5%",
    loanPeriod: "1년",
    repaymentRounds: "1회차",
    applicant: {
      name: "박세호",
      job: "학생",
    },
  };

  return (
    <>
      <SubTopBar title={"투자 진행 건"} />
      <Wrapper>
        <LoanInfoCard {...DUMMY_LOAN} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 0 1.875rem;
`;
