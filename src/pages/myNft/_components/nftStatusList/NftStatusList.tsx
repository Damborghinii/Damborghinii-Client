import { NFT_STATUS } from "@pages/myNft/_hooks/useNftStatusList";
import * as S from "./NftStatusList.styled";

import { MyNftStatusType } from "@apis/myNft";

interface TabProps {
  tabStatus: MyNftStatusType;
  onClick: (key: string) => void;
}

export const NftStatusTab = ({ tabStatus, onClick }: TabProps) => {
  return (
    <S.NftStatusListWrapper>
      {Object.entries(NFT_STATUS).map(([key, label]) => (
        <S.NftStatusTab
          key={key}
          active={key === tabStatus}
          onClick={() => onClick(key)}
        >
          {label}
        </S.NftStatusTab>
      ))}
    </S.NftStatusListWrapper>
  );
};
