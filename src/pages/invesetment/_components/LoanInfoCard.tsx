import styled from "@emotion/styled";

import Spacer from "@components/common/spacer/Spacer";
import { HorizontalDivider } from "@components/common/horizontalDivider/HorizontalDivider";

import { InvestmentTitle } from "./InvestmentTitle";

export const LoanInfoCard = () => {
  return (
    <Wrapper>
      <InvestmentTitle text="대출 신청 정보" />
      <InfoWrapper>
        <Spacer height="0.75rem" />
        <HorizontalDivider />
        <Spacer height="0.75rem" />
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

const MainTextWrapper = styled.div`
  display: flex;
  gap: 2.5rem;
`;

// const;
