import { create } from "zustand";

type ModalStore = {
  isOpen: boolean;
  changeModalStatus: () => void;
};

const useModalStore = create<ModalStore>()((set) => ({
  isOpen: false,
  changeModalStatus: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useModalStore;
