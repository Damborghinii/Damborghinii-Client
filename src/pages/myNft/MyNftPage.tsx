import * as S from "./MyNft.styled";
import { NftRegister } from "./_components/nftRegister/NftRegister";
import { NftTitle } from "./_components/nftTitle/NftTitle";
import { NftStatusTab } from "./_components/nftStatusList/NftStatusList";
import { NftCard } from "../main/_components/NftCard";

import { MyNftType } from "./type/nft";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMyLftList } from "@apis/myNft";
import { useTabBar } from "./_hooks/useNftStatusList";
import { MainBadge } from "@components/common/mainBadge/MainBadge";
import theme from "@styles/theme";
import { MusicCard } from "./_components/musicCard/MusicCard";

// 필터 상태 타입 정의
type FilterStatus = "ALL" | "APPLYING" | "REPAYING";

const FILTER_LABELS: Record<FilterStatus, string> = {
  ALL: "전체",
  APPLYING: "대출신청중",
  REPAYING: "상환중",
};

const MyNftPage = () => {
  const { currentTab, setCurrentTab } = useTabBar();
  const [nftList, setNftList] = useState<MyNftType[]>([]);
  const [filterStatus, setFilterStatus] = useState<FilterStatus>("ALL"); // 필터 상태 추가

  const navigate = useNavigate();

  // 배지 스타일 함수
  const getBadgeStyle = (status: FilterStatus) => {
    const isActive = filterStatus === status;
    return {
      borderColor: isActive ? theme.color.neutral.B50 : "transparent",
      textColor: isActive ? theme.color.neutral.B70 : theme.color.neutral.B40,
      backgroundColor: isActive
        ? theme.color.neutral.white
        : theme.color.neutral.B00,
    };
  };

  return (
    <S.MyNftWrapper>
      <NftRegister />
      <NftTitle>내 음원</NftTitle>
      <NftStatusTab currentTab={currentTab} onTabChange={setCurrentTab} />
      <S.EntryWrapper>
        <S.BadgeContainer>
          {Object.entries(FILTER_LABELS).map(([key, label]) => {
            const status = key as FilterStatus;
            const style = getBadgeStyle(status);

            return (
              <MainBadge
                key={key}
                borderColor={style.borderColor}
                textColor={style.textColor}
                backgroundColor={style.backgroundColor}
                onClick={() => setFilterStatus(status)}
              >
                {label}
              </MainBadge>
            );
          })}
        </S.BadgeContainer>
        <MusicCard></MusicCard>
        <MusicCard></MusicCard>
        <MusicCard></MusicCard>

        <S.NftCardContainer>
          {nftList.length > 0 &&
            nftList.map((nft) => <NftCard key={nft.contractId} {...nft} />)}
        </S.NftCardContainer>
      </S.EntryWrapper>
    </S.MyNftWrapper>
  );
};

export default MyNftPage;
