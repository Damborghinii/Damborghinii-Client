import * as S from "./MyNft.styled";

import { useModal } from "../../hooks/useModal";
import { useDeleteModal } from "../../components/common/modal/DeleteModal";
import { TopBar } from "../../components/common/topBar/TopBar";
import { NftRegister } from "./nftRegister/NftRegister";
import { NftTitle } from "./nftTitle/NftTitle";

const MyNftPage = () => {
  const { openModal } = useModal();
  const deleteModal = useDeleteModal();
  return (
    <S.MyNftWrapper>
      <TopBar />
      <NftRegister />
      <NftTitle>등록된 NFT 목록</NftTitle>
    </S.MyNftWrapper>
  );
};

export default MyNftPage;
