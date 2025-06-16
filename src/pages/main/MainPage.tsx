import * as S from "./Main.styled";
import { useNavigate } from "react-router-dom";

import { MainLoanCard } from "./_components/MainLoanCard";

import { MainTitle } from "./_components/MainTitle";
import { useEffect, useState } from "react";
import { Contract, getContracts } from "@apis/investment";

export const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const [contracts, setContracts] = useState<Contract[]>([]);
  const fetchData = async () => {
    const res = await getContracts();
    if (res.success && Array.isArray(res.data?.contracts)) {
      setContracts(res.data?.contracts);
    } else {
      setContracts([]);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <S.MainContainer>
      <MainTitle
        mainText="전체 투자 진행건"
        subText={`총 ${contracts.length.toString()}건`}
      />
      <S.MainCardWrapper>
        {contracts.map((contract) => (
          <MainLoanCard
            key={contract.contractId}
            loanAmount={contract.loanAmount}
            imageUrl={contract.copyright.imageUrl}
            interestRate={parseInt(
              contract.interestRate.replace(/[^0-9]/g, "")
            )}
            collateralName={contract.copyright.name}
            presentValue={contract.copyright.ethPrice}
            investmentProgressRate={parseInt(
              contract.progress.replace(/[^0-9]/g, "")
            )}
            onClick={() => navigate(`/investment/${contract.contractId}`)}
          />
        ))}
      </S.MainCardWrapper>
    </S.MainContainer>
  );
};
