import styled from "@emotion/styled";
import { InvestmentTitle } from "./InvestmentTitle";
import Spacer from "@components/common/spacer/Spacer";
import {
  ProgressBarFill,
  ProgressBarWrapper,
  SecondaryText,
} from "@pages/main/_components/MainLoanCard";

import { ProgressInfoProps } from "../InvestmentInfo";

export const ProgressRateSection = (props: ProgressInfoProps) => {
  return (
    <Wrapper>
      <InvestmentTitle text="투자 진행률" />
      <Spacer height="1.25rem" />
      <SecondaryText>{props.currentProgress}</SecondaryText>
      <Spacer height="0.5rem" />
      <ProgressBarWrapper>
        <ProgressBarFill
          percentage={parseInt(
            props.currentProgress.replace(/[^0-9]/g, ""),
            10
          )}
        />
      </ProgressBarWrapper>
      <Spacer height="0.75rem" />
      <BodyText>남은 투자금 {props.remainingInvestingMoney}</BodyText>
      <Spacer height="2.5rem" />
      <DescriptionSection>
        <SmallText>다음 조건으로 투자가 진행되어요.</SmallText>
        <Spacer height="0.625rem" />
        <NoticeList>
          <li>
            전체 대출액에서 내가 투자한 금액의 %만큼 대출에 대한 지분을 받아요
          </li>
          <li>
            내가 보유한 지분에 따라 매월 발생하는 월 이자, 연체금을 지급받아요
          </li>
          <li>
            모든 투자자가 모여 투자가 마감되면, 투자한 금액이 최종 지불되고
            다음달부터 월 이자를 지급받아요.
          </li>
          <li>마지막 회차에 남은 이자를 지급받고 투자한 원금을 돌려받아요.</li>
          <li>
            이자 및 원금이 모두 지불되지 못하였을 경우 NFT담보가 경매로
            넘어가며, 보유한 지분에 따라 경매 수익을 지급받아요.
          </li>
        </NoticeList>
      </DescriptionSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 2.5rem 0;
`;

export const BodyText = styled.h1`
  ${({ theme }) => theme.typography["body2-3"]};

  color: ${({ theme }) => theme.color.neutral.B70};
`;

export const SmallText = styled.h1`
  ${({ theme }) => theme.typography["small1-1"]};

  color: ${({ theme }) => theme.color.neutral.B60};
`;

const DescriptionSection = styled.div`
  padding: 0.625rem;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.color.neutral.B00};
`;

const NoticeList = styled.ul`
  list-style: disc;
  padding-left: 1rem;

  & > li {
    color: ${({ theme }) => theme.color.neutral.B60};
    ${({ theme }) => theme.typography["small1-3"]};
  }
`;
