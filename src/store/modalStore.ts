import { create } from "zustand";
import { ModalProps } from "../components/common/modal/Modal";

type ModalStore = {
  changeModalStatus: (status: boolean) => void;
  changeModalProps: (newProps: ModalProps | undefined) => void;
  isOpen: boolean;
  props?: ModalProps;
};

const useModalStore = create<ModalStore>()((set) => ({
  isOpen: false,
  props: undefined,
  changeModalStatus: (status) => set(() => ({ isOpen: status })),
  changeModalProps: (newProps) => set(() => ({ props: newProps })),
}));

export default useModalStore;
