import useModalStore from "../../../store/modalStore";

export const useModal = () => {
  const { isOpen, changeModalStatus } = useModalStore();

  const openModal = () => {
    changeModalStatus();
  };

  const closeModal = () => {
    changeModalStatus();
  };

  return { openModal, closeModal, isOpen };
};
