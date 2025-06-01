import { useModal } from "../../../hooks/useModal";
import { ModalProps } from "./Modal";

export const useDeleteModal = (): ModalProps => {
  const { closeModal } = useModal();
  return {
    title: "NFT를 삭제하시겠어요?",
    sub: "삭제된 NFT는 복구가 불가능합니다.",
    primaryButton: {
      children: "취소",
      onClick: closeModal,
    },
    secondButton: {
      children: "확인",
      onClick: closeModal,
    },
  };
};
