import useModalStore from "../store/modalStore";
import { ModalProps } from "../components/common/modal/Modal";

export const useModal = () => {
  const { isOpen, changeModalStatus, changeModalProps, props } =
    useModalStore();

  const openModal = (newProps: ModalProps) => {
    changeModalStatus(true);
    changeModalProps(newProps);
  };

  const closeModal = () => {
    changeModalStatus(false);
    changeModalProps(undefined);
  };

  const setProps = (newProps: ModalProps | undefined) => {
    changeModalProps(newProps);
  };

  return { openModal, closeModal, setProps, isOpen, props };
};
