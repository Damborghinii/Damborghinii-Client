import * as S from "./MyNft.styled";

import { useModal } from "../../hooks/useModal";
import { useDeleteModal } from "../../components/common/modal/DeleteModal";
import { NftRegister } from "./_components/nftRegister/NftRegister";
import { NftTitle } from "./_components/nftTitle/NftTitle";
import { NftStatusTab } from "./_components/nftStatusList/NftStatusList";

const MyNftPage = () => {
  const { openModal } = useModal();
  const deleteModal = useDeleteModal();
  return (
    <S.MyNftWrapper>
      <NftRegister />
      <NftTitle>등록된 NFT 목록</NftTitle>
      <NftStatusTab />
    </S.MyNftWrapper>
  );
};

export default MyNftPage;
