import {
  MY_NFT_TAB_LABELS,
  MyNftTabType,
} from "@pages/myNft/_hooks/useNftStatusList";
import * as S from "./NftStatusList.styled";

interface TabProps {
  currentTab: MyNftTabType; // 타입 변경
  onTabChange: (tab: MyNftTabType) => void;
}

export const NftStatusTab = ({ currentTab, onTabChange }: TabProps) => {
  return (
    <S.NftStatusListWrapper>
      {Object.entries(MY_NFT_TAB_LABELS).map(([key, label]) => (
        <S.NftStatusTab
          key={key}
          active={key === currentTab}
          onClick={() => onTabChange(key as MyNftTabType)}
        >
          {label}
        </S.NftStatusTab>
      ))}
    </S.NftStatusListWrapper>
  );
};
