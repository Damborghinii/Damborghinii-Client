import styled from "@emotion/styled";

import Spacer from "@components/common/spacer/Spacer";
import { HorizontalDivider } from "@components/common/horizontalDivider/HorizontalDivider";

import { SubContent, SubTitle } from "@pages/invesetment/_components/Text";

export interface LoanInfoProps {
  loanAmount: string;
  monthlyInterest: string;
  repaymentMethod: string;
  annualInterestRate: string;
  totalRepaymentAmount: string;
  delinquencyRate: string;
  loanPeriod: string;
  repaymentRounds: string;
  imageUrl: string;
  nftName: string;
  nftPrice: string;
  realPrice: string;
}

export const LoanInfo = (props: LoanInfoProps) => {
  return (
    <Wrapper>
      <InfoWrapper>
        <RowWrapper>
          <CardTextWrapper>
            <SubTitle>대출 방식</SubTitle>
            <SubContent>{props.repaymentMethod}</SubContent>
          </CardTextWrapper>
        </RowWrapper>

        <Spacer height="0.75rem" />
        <HorizontalDivider />
        <Spacer height="0.75rem" />

        <RowWrapper>
          <CardTextWrapper>
            <SubTitle>대출액</SubTitle>
            <SubContent>{props.loanAmount}</SubContent>
          </CardTextWrapper>
          <CardTextWrapper>
            <SubTitle>연이율</SubTitle>
            <SubContent>{"30%"}</SubContent>
          </CardTextWrapper>
        </RowWrapper>
        <Spacer height="0.75rem" />

        <RowWrapper>
          <CardTextWrapper>
            <SubTitle>월 이자</SubTitle>
            <SubContent>{props.monthlyInterest}</SubContent>
          </CardTextWrapper>
          <CardTextWrapper>
            <SubTitle>총 납부금액</SubTitle>
            <SubContent>{props.totalRepaymentAmount}</SubContent>
          </CardTextWrapper>
        </RowWrapper>
        <Spacer height="0.75rem" />
        <RowWrapper>
          <CardTextWrapper>
            <SubTitle>연체율</SubTitle>
            <SubContent>{props.annualInterestRate}</SubContent>
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
        <SubTitle>대출 담보</SubTitle>
        <Spacer height="0.5rem" />
        <LoanWrapper>
          <img src={props.imageUrl} alt="담보 사진" width={18} height={18} />
          <SubContent
            style={{
              paddingTop: "0.1rem",
            }}
          >
            {props.nftName}
          </SubContent>
          <PriceDetail>
            <SubTitle
              style={{
                color: "black",
              }}
            >
              {props.nftPrice}
            </SubTitle>
            ·
            <SubTitle
              style={{
                color: "black",
              }}
            >
              {props.realPrice}
            </SubTitle>
          </PriceDetail>
        </LoanWrapper>
      </InfoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoWrapper = styled.div``;

const LoanWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.625rem;

  background-color: ${({ theme }) => theme.color.primary.P00};

  padding: 0.375rem 0.625rem;
  border-radius: 0.375rem;
`;

const PriceDetail = styled.div`
  display: flex;

  gap: 0.375rem;
  flex: 1;
  border-radius: 0.375rem;
  align-items: center;

  padding-top: 0.1rem;
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
