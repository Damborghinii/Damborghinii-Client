import { create } from "zustand";
import { ModalProps } from "../components/common/modal/Modal";

type BottomSheetStore = {
  changeBottomSheetStatus: (status: boolean) => void;
  changeBottomSheetProps: (newProps: ModalProps | undefined) => void;
  isOpen: boolean;
  props?: ModalProps;
};

const useBottomSheetStore = create<BottomSheetStore>()((set) => ({
  isOpen: false,
  props: undefined,
  changeBottomSheetStatus: (status) => set(() => ({ isOpen: status })),
  changeBottomSheetProps: (newProps) => set(() => ({ props: newProps })),
}));

export default useBottomSheetStore;
