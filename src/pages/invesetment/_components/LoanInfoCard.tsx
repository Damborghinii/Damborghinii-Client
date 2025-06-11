import styled from "@emotion/styled";

import Spacer from "@components/common/spacer/Spacer";
import { HorizontalDivider } from "@components/common/horizontalDivider/HorizontalDivider";

import { InvestmentTitle } from "./InvestmentTitle";

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
            <CardMainTitle>대출액</CardMainTitle>
            <CardMainContent>{props.loanAmount}</CardMainContent>
          </CardTextWrapper>
          <CardTextWrapper>
            <CardMainTitle>월 이자</CardMainTitle>
            <CardMainContent>{props.monthlyInterest}</CardMainContent>
          </CardTextWrapper>
        </RowWrapper>
        <Spacer height="0.75rem" />
        <HorizontalDivider />

        <Spacer height="0.75rem" />

        <RowWrapper>
          <CardTextWrapper>
            <CardSubTitle>대출 방식</CardSubTitle>
            <CardSubContent>{props.repaymentMethod}</CardSubContent>
          </CardTextWrapper>
          <CardTextWrapper>
            <CardSubTitle>연이율</CardSubTitle>
            <CardSubContent>{props.annualInterestRate}</CardSubContent>
          </CardTextWrapper>
        </RowWrapper>

        <Spacer height="0.75rem" />

        <RowWrapper>
          <CardTextWrapper>
            <CardSubTitle>총 납부금액</CardSubTitle>
            <CardSubContent>{props.totalRepaymentAmount}</CardSubContent>
          </CardTextWrapper>
          <CardTextWrapper>
            <CardSubTitle>연체율</CardSubTitle>
            <CardSubContent>{props.delinquencyRate}</CardSubContent>
          </CardTextWrapper>
        </RowWrapper>

        <Spacer height="0.75rem" />
        <HorizontalDivider />
        <Spacer height="0.75rem" />

        <RowWrapper>
          <CardTextWrapper>
            <CardSubTitle>대출기간</CardSubTitle>
            <CardSubContent>{props.loanPeriod}</CardSubContent>
          </CardTextWrapper>
          <CardTextWrapper>
            <CardSubTitle>납부회차</CardSubTitle>
            <CardSubContent>{props.repaymentRounds}</CardSubContent>
          </CardTextWrapper>
        </RowWrapper>

        <Spacer height="0.75rem" />
        <HorizontalDivider />
        <Spacer height="0.75rem" />

        <ApplicantWrapper>
          <CardSubTitle>신청자</CardSubTitle>
          <ApplicantDetailInfo>
            <CardSubTitle>이름</CardSubTitle>
            <Spacer height="100%" width="0.5rem" />
            <CardSubContent>{props.applicant.name}</CardSubContent>
            <Spacer height="100%" width="1.25rem" />
            <CardSubTitle>직업</CardSubTitle>
            <Spacer height="100%" width="0.5rem" />
            <CardSubContent>{props.applicant.job}</CardSubContent>
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

const CardSubTitle = styled.h2`
  ${({ theme }) => theme.typography["small1-3"]};
  color: ${({ theme }) => theme.color.neutral.B40};
`;

const CardSubContent = styled.h2`
  ${({ theme }) => theme.typography["small1-2"]};
  color: ${({ theme }) => theme.color.neutral.B70};
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

const CardMainTitle = styled.h1`
  ${({ theme }) => theme.typography["body2-3"]};

  color: ${({ theme }) => theme.color.neutral.B40};
`;

const CardMainContent = styled.h1`
  ${({ theme }) => theme.typography["body2-2"]};
  color: ${({ theme }) => theme.color.primary.P60};
`;
