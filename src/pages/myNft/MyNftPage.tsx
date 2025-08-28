import * as S from "./MyNft.styled";
import { NftRegister } from "./_components/nftRegister/NftRegister";
import { NftTitle } from "./_components/nftTitle/NftTitle";
import { NftStatusTab } from "./_components/nftStatusList/NftStatusList";
import { useEffect, useMemo, useState } from "react";
import { useTabBar } from "./_hooks/useNftStatusList";
import { MainBadge } from "@components/common/mainBadge/MainBadge";
import theme from "@styles/theme";
import { MusicCard } from "./_components/musicCard/MusicCard";
import { useMyNftList } from "@hooks/queries/useMyNftList";
import { CopyrightItem, MyInvestNftType, MyNftStatusType } from "@apis/myNft";
import { useMyInvestNftList } from "@hooks/queries/useMyInvestNftList";

const FILTER_LABELS_ISSUED: Record<MyNftStatusType, string> = {
  ALL: "전체",
  REGISTERED: "등록",
  INVESTING: "대출신청중",
  COMPLETED: "상환중",
};

const FILTER_LABELS_INVESTED: Record<MyInvestNftType, string> = {
  ALL: "전체",
  INVESTING: "대출신청중",
  COMPLETED: "상환중",
};

const MyNftPage = () => {
  const { currentTab, setCurrentTab } = useTabBar();

  const [issuedStatus, setIssuedStatus] = useState<MyNftStatusType>("ALL");
  const [investedStatus, setInvestedStatus] = useState<MyInvestNftType>("ALL");

  useEffect(() => {
    if (currentTab === "ISSUED") setIssuedStatus("ALL");
    else setInvestedStatus("ALL");
  }, [currentTab]);

  const {
    data: issuedData,
    isLoading: issuedLoading,
    isError: issuedError,
  } = useMyNftList(issuedStatus);

  const {
    data: investedData,
    isLoading: investedLoading,
    isError: investedError,
  } = useMyInvestNftList(investedStatus);

  const { list } = useMemo(() => {
    if (currentTab === "ISSUED") {
      return {
        list: issuedData?.data?.copyrights ?? [],
        loading: issuedLoading,
        error: issuedError,
      };
    }
    return {
      list: investedData?.data?.copyrights ?? [],
      loading: investedLoading,
      error: investedError,
    };
  }, [currentTab, issuedData, investedData]);

  const { labels, selected, onSelect } = useMemo(() => {
    if (currentTab === "ISSUED") {
      return {
        labels: FILTER_LABELS_ISSUED as Record<string, string>,
        selected: issuedStatus,
        onSelect: (k: string) => setIssuedStatus(k as MyNftStatusType),
      };
    }
    return {
      labels: FILTER_LABELS_INVESTED as Record<string, string>,
      selected: investedStatus,
      onSelect: (k: string) => setInvestedStatus(k as MyInvestNftType),
    };
  }, [currentTab, issuedStatus, investedStatus]);

  // 배지 스타일 함수
  const getBadgeStyle = (status: string) => {
    const isActive = selected === status;
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
          {Object.entries(labels).map(([key, label]) => {
            const style = getBadgeStyle(key);
            return (
              <MainBadge
                key={key}
                borderColor={style.borderColor}
                textColor={style.textColor}
                backgroundColor={style.backgroundColor}
                onClick={() => onSelect(key)}
              >
                {label}
              </MainBadge>
            );
          })}
        </S.BadgeContainer>
        {list.map((item: CopyrightItem) => (
          <MusicCard
            key={item.copyrightId}
            imageUrl={item.imageUrl}
            title={item.title}
            status={item.status}
            progress={item.progress ?? 0}
          />
        ))}
      </S.EntryWrapper>
    </S.MyNftWrapper>
  );
};

export default MyNftPage;
