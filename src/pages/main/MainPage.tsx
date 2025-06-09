import * as S from "./Main.styled";
import { MainLoanCard } from "./_components/MainLoanCard";

import { MainTitle } from "./_components/MainTitle";
import { getSelctedType } from "./_hooks/getSelectedType";
import { getTotalCount } from "./_hooks/getTotalCount";

export const MainPage: React.FC = () => {
  const { selectedType } = getSelctedType();
  const { count } = getTotalCount();

  return (
    <S.MainContainer>
      <MainTitle
        mainText="전체 투자 진행건"
        subText={count}
        selectedType={selectedType}
      />
      <S.MainCardWrapper>
        <MainLoanCard
          loanAmount={160000000}
          interestRate={30}
          collateralName={"Lil Pudgy #2017"}
          presentValue={"1.2299ETH"}
          investmentProgressRate={15}
        ></MainLoanCard>
        <MainLoanCard
          loanAmount={160000000}
          interestRate={30}
          collateralName={"Lil Pudgy #2017"}
          presentValue={"1.2299ETH"}
          investmentProgressRate={30}
        ></MainLoanCard>
      </S.MainCardWrapper>
    </S.MainContainer>
  );
};
