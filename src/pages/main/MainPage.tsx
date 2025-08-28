import * as S from "./Main.styled";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { IcSearch } from "@assets/svg";
import Spacer from "@components/common/spacer/Spacer";
import { BadgeScroll } from "./_components/BadgeScroll";
import { Title } from "./_components/Title";
import { NewLoanCard } from "./_components/NewLoanCard";
import {
  NewContract,
  SearchFilter,
  SEARCH_FILTER_LABELS,
  getContracts,
} from "@apis/getMain";

export const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const [contracts, setContracts] = useState<NewContract[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedFilter, setSelectedFilter] = useState<SearchFilter>(
    SearchFilter.ALL
  );

  const fetchData = async (filter: SearchFilter = SearchFilter.ALL) => {
    try {
      setIsLoading(true);
      const res = await getContracts(filter);

      if (res.success && Array.isArray(res.data?.contracts)) {
        setContracts(res.data.contracts);
      } else {
        setContracts([]);
      }
    } catch (error) {
      setContracts([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(selectedFilter);
  }, [selectedFilter]);

  const handleFilterChange = (filter: SearchFilter) => {
    setSelectedFilter(filter);
  };

  // 필터링된 상태인지 확인
  const isFiltered = selectedFilter !== SearchFilter.ALL;

  // 필터링된 상태가 아닐 때만 섹션별로 나누기
  const getDisplayContracts = () => {
    if (isFiltered) {
      return {
        popular: contracts.slice(0, 6), // 필터링된 상태에서는 모든 결과를 한 섹션에
        recent: [],
      };
    }

    // 전체 보기일 때만 섹션별로 나누기
    const popularContracts = [...contracts]
      .sort((a, b) => {
        const progressA = parseFloat(a.progress.replace("%", ""));
        const progressB = parseFloat(b.progress.replace("%", ""));
        return progressB - progressA;
      })
      .slice(0, 2);

    const recentContracts = [...contracts]
      .sort((a, b) => {
        const dateA = new Date(a.expirationTime).getTime();
        const dateB = new Date(b.expirationTime).getTime();
        return dateB - dateA;
      })
      .slice(0, 3);

    return {
      popular: popularContracts,
      recent: recentContracts,
    };
  };

  const { popular, recent } = getDisplayContracts();

  if (isLoading) {
    return (
      <S.MainContainer>
        <div>데이터를 불러오는 중...</div>
      </S.MainContainer>
    );
  }

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

      <BadgeScroll
        selectedFilter={selectedFilter}
        onFilterChange={handleFilterChange}
      />

      <Spacer height="0.75rem" />

      {/* 필터링된 상태일 때 */}
      {isFiltered && (
        <>
          <Title onClick={() => {}}>
            {SEARCH_FILTER_LABELS[selectedFilter]}
          </Title>
          <S.MainCardWrapper>
            {popular.length > 0 ? (
              popular.map((contract) => (
                <NewLoanCard
                  key={`filtered-${contract.contractId}`}
                  contract={contract}
                  onClick={() => {
                    navigate(`/loan-apply/progress/${contract.contractId}`);
                  }}
                />
              ))
            ) : (
              <div>해당 조건의 계약이 없습니다.</div>
            )}
          </S.MainCardWrapper>
        </>
      )}

      {/* 전체 보기일 때 */}
      {!isFiltered && (
        <>
          <Title onClick={() => {}}>많은 사람들이 투자한</Title>
          <S.MainCardWrapper>
            {popular.length > 0 ? (
              popular.map((contract) => (
                <NewLoanCard
                  key={`popular-${contract.contractId}`}
                  contract={contract}
                  onClick={() => {
                    navigate(`/loan-apply/progress/${contract.contractId}`);
                  }}
                />
              ))
            ) : (
              <div>투자 가능한 계약이 없습니다.</div>
            )}
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
            {recent.length > 0 ? (
              recent.map((contract) => (
                <NewLoanCard
                  key={`recent-${contract.contractId}`}
                  contract={contract}
                  onClick={() => {
                    navigate(`/loan-apply/progress/${contract.contractId}`);
                  }}
                />
              ))
            ) : (
              <div>최근 등록된 계약이 없습니다.</div>
            )}
          </S.MainCardWrapper>
        </>
      )}
    </S.MainContainer>
  );
};
