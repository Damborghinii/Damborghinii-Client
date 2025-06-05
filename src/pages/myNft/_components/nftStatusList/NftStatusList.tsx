import * as S from "./NftStatusList.styled";
import {
  useNftStatusList,
  NFT_STATUS,
  NftStatusKey,
} from "../../_hooks/useNftStatusList";

export const NftStatusTab: React.FC = () => {
  const { nftStatus, setNftStatus } = useNftStatusList();
  return (
    <S.NftStatusListWrapper>
      {Object.entries(NFT_STATUS).map(([key, label]) => (
        <S.NftStatusTab
          key={key}
          active={key === nftStatus}
          onClick={() => setNftStatus(key as NftStatusKey)}
        >
          {label}
        </S.NftStatusTab>
      ))}
    </S.NftStatusListWrapper>
  );
};
