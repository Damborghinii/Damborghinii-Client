import styled from "@emotion/styled";

import Spacer from "@components/common/spacer/Spacer";
import { HorizontalDivider } from "@components/common/horizontalDivider/HorizontalDivider";

import { InvestmentTitle } from "./InvestmentTitle";
import { MainTitle, MainContent, SubContent, SubTitle } from "./Text";

export interface LoanInfoProps {
  loanAmount: string;
  monthlyInterest: string;
  repaymentMethod: string;
  annualInterestRate: string;
  totalRepaymentAmount: string;
  delinquencyRate: string;
  loanPeriod: string;
  repaymentRounds: string;
  applicant: {
    name: string;
    job: string;
  };
}

export const LoanInfoCard = (props: LoanInfoProps) => {
  return (
    <Wrapper>
      <InvestmentTitle text="대출 신청 정보" />
      <InfoWrapper>
        <RowWrapper>
          <CardTextWrapper>
            <MainTitle>대출액</MainTitle>
            <MainContent>{props.loanAmount}</MainContent>
          </CardTextWrapper>
          <CardTextWrapper>
            <MainTitle>월 이자</MainTitle>
            <MainContent>{props.monthlyInterest}</MainContent>
          </CardTextWrapper>
        </RowWrapper>
        <Spacer height="0.75rem" />
        <HorizontalDivider />

        <Spacer height="0.75rem" />

        <RowWrapper>
          <CardTextWrapper>
            <SubTitle>대출 방식</SubTitle>
            <SubContent>{props.repaymentMethod}</SubContent>
          </CardTextWrapper>
          <CardTextWrapper>
            <SubTitle>연이율</SubTitle>
            <SubContent>{props.annualInterestRate}</SubContent>
          </CardTextWrapper>
        </RowWrapper>

        <Spacer height="0.75rem" />

        <RowWrapper>
          <CardTextWrapper>
            <SubTitle>총 납부금액</SubTitle>
            <SubContent>{props.totalRepaymentAmount}</SubContent>
          </CardTextWrapper>
          <CardTextWrapper>
            <SubTitle>연체율</SubTitle>
            <SubContent>{props.delinquencyRate}</SubContent>
          </CardTextWrapper>
        </RowWrapper>

        <Spacer height="0.75rem" />
        <HorizontalDivider />
        <Spacer height="0.75rem" />

        <RowWrapper>
          <CardTextWrapper>
            <SubTitle>대출기간</SubTitle>
            <SubContent>{props.loanPeriod}</SubContent>
          </CardTextWrapper>
          <CardTextWrapper>
            <SubTitle>납부회차</SubTitle>
            <SubContent>{props.repaymentRounds}</SubContent>
          </CardTextWrapper>
        </RowWrapper>

        <Spacer height="0.75rem" />
        <HorizontalDivider />
        <Spacer height="0.75rem" />

        <ApplicantWrapper>
          <SubTitle>신청자</SubTitle>
          <ApplicantDetailInfo>
            <SubTitle>이름</SubTitle>
            <Spacer height="100%" width="0.5rem" />
            <SubContent>{props.applicant.name}</SubContent>
            <Spacer height="100%" width="1.25rem" />
            <SubTitle>직업</SubTitle>
            <Spacer height="100%" width="0.5rem" />
            <SubContent>{props.applicant.job}</SubContent>
          </ApplicantDetailInfo>
        </ApplicantWrapper>
      </InfoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 2.5rem 0;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoWrapper = styled.div``;

const ApplicantWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ApplicantDetailInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0.675rem;
  flex: 1;
  background-color: ${({ theme }) => theme.color.neutral.B00};
  border-radius: 0.375rem;
`;

const CardTextWrapper = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RowWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  gap: 10%;
  padding-right: 2rem;
`;
