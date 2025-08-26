import * as S from "./Main.styled";
import { useNavigate } from "react-router-dom";

import { MainLoanCard } from "./_components/MainLoanCard";

import { useEffect, useState } from "react";
import { Contract, getContracts } from "@apis/investment";
import { IcSearch } from "@assets/svg";
import Spacer from "@components/common/spacer/Spacer";
import { BadgeScroll } from "./_components/BadgeScroll";
import { Title } from "./_components/Title";
import { NewLoanCard } from "./_components/NewLoanCard";

import mockImageUrl from "@assets/image/mockImage.png";

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
          width={20}
          height={20}
          style={{
            position: "absolute",
            top: "0.7rem",
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
      <Spacer height="0.75rem" />
      <BadgeScroll />
      <Spacer height="0.75rem" />

      <Title onClick={() => {}}>많은 사람들이 투자한</Title>

      <S.MainCardWrapper>
        <NewLoanCard imageUrl={mockImageUrl} expiration="2025-08-28" />

        <NewLoanCard imageUrl={mockImageUrl} expiration="2025-08-28" />
      </S.MainCardWrapper>

      <Spacer height="1.25rem" />

      <Title
        onClick={() => {
          alert("연결대기");
        }}
      >
        최근 등록된
      </Title>

      <S.MainCardWrapper>
        <NewLoanCard imageUrl={mockImageUrl} expiration="2025-08-28" />

        <NewLoanCard imageUrl={mockImageUrl} expiration="2025-08-28" />
      </S.MainCardWrapper>

      {/* <S.MainCardWrapper>
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
      </S.MainCardWrapper> */}
    </S.MainContainer>
  );
};
