import * as S from "./MyNft.styled";

// import { useModal } from "../../hooks/useModal";
// import { useDeleteModal } from "../../components/common/modal/DeleteModal";
import { NftRegister } from "./_components/nftRegister/NftRegister";
import { NftTitle } from "./_components/nftTitle/NftTitle";
import { NftStatusTab } from "./_components/nftStatusList/NftStatusList";
import { MainTitle } from "@pages/main/_components/MainTitle";
import { NftCard } from "./_components/NftCard";

import { MyNftType } from "./type/nft";
import { cardImage } from "@assets/image";

const MyNftPage = () => {
  // const { openModal } = useModal();
  // const deleteModal = useDeleteModal();

  const MOCK_NFT1: MyNftType = {
    image: cardImage,
    nftName: "Lil Pudgy #2017",
    value: "1.2299ETH",
    nftType: "아트 NFT",
    isRegistered: false,
    onClick: () => alert("뚝딱뚝딱 공사중"),
  };

  const MOCK_NFT2: MyNftType = {
    image: cardImage,
    nftName: "Lil Pudgy #2017",
    value: "1.2299ETH",
    nftType: "아트 NFT",
    isRegistered: true,
  };

  return (
    <S.MyNftWrapper>
      <NftRegister />
      <NftTitle>등록된 NFT 목록</NftTitle>
      <NftStatusTab />
      <S.EntryWrapper>
        <MainTitle mainText="전체 투자 진행건" subText={"총 2건"} />
        <S.NftCardContainer>
          <NftCard {...MOCK_NFT1} />
          <NftCard {...MOCK_NFT2} />
          <NftCard {...MOCK_NFT2} />
        </S.NftCardContainer>
      </S.EntryWrapper>
    </S.MyNftWrapper>
  );
};

export default MyNftPage;
