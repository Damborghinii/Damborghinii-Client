import * as S from "./Main.styled";
import { useNavigate } from "react-router-dom";

import { MainLoanCard } from "./_components/MainLoanCard";

import { MainTitle } from "./_components/MainTitle";
import { getTotalCount } from "./_hooks/getTotalCount";
import { useEffect } from "react";
import { getContracts } from "@apis/investment";

export const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const { count } = getTotalCount();
  const fetchData = async () => {
    await getContracts();
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <S.MainContainer>
      <MainTitle mainText="전체 투자 진행건" subText={count} />
      <S.MainCardWrapper>
        <MainLoanCard
          loanAmount={160000000}
          interestRate={30}
          collateralName={"Lil Pudgy #2017"}
          presentValue={"1.2299ETH"}
          investmentProgressRate={15}
          onClick={() => navigate("investment/1")}
        ></MainLoanCard>
        <MainLoanCard
          loanAmount={160000000}
          interestRate={30}
          collateralName={"Lil Pudgy #2017"}
          presentValue={"1.2299ETH"}
          investmentProgressRate={30}
          onClick={() => navigate("investment/2")}
        ></MainLoanCard>
        <MainLoanCard
          loanAmount={160000000}
          interestRate={30}
          collateralName={"Lil Pudgy #2017"}
          presentValue={"1.2299ETH"}
          investmentProgressRate={30}
          onClick={() => navigate("investment/3")}
        ></MainLoanCard>
      </S.MainCardWrapper>
    </S.MainContainer>
  );
};
