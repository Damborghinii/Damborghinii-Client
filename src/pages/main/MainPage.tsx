import * as S from "./Main.styled";
import { useNavigate } from "react-router-dom";

import { MainLoanCard } from "./_components/MainLoanCard";

import { useEffect, useState } from "react";
import { Contract, getContracts } from "@apis/investment";
import { IcSearch } from "@assets/svg";

export const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
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
      <S.MainSearchContainer>
        <S.MainSearchItem
          type="text"
          name="search"
          placeholder="음원명, 가수 검색"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
          value={inputValue}
        />
        <IcSearch
          width={18}
          height={18}
          style={{
            position: "absolute",
            top: "12px",
            right: "2.5rem",
            cursor: "pointer",
          }}
          onClick={
            inputValue.length > 0
              ? () => alert("검색 가능")
              : () => alert("입력 필드를 채워주세요.")
          }
        />
      </S.MainSearchContainer>

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
            investmentProgressRate={parseFloat(
              contract.progress.replace(/[^0-9.]/g, "")
            )}
            onClick={() => navigate(`/investment/${contract.contractId}`)}
          />
        ))}
      </S.MainCardWrapper>
    </S.MainContainer>
  );
};
