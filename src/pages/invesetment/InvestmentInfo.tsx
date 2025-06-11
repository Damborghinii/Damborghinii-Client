import styled from "@emotion/styled";

import { SubTopBar } from "@components/common/topBar/SubTopBar";
import { useParams } from "react-router-dom";
import { LoanInfoCard } from "./_components/LoanInfoCard";

export const InvestmentInfo = () => {
  const { investmentId } = useParams();
  console.log(investmentId);
  return (
    <>
      <SubTopBar title={"투자 진행 건"} />
      <Wrapper>
        <LoanInfoCard />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 0 1.875rem;
`;
