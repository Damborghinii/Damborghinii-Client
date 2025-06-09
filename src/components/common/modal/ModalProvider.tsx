import { ReactSVGElement } from "react";

import { MainModal } from "./Modal";
import { useModal } from "../../../hooks/useModal";
import FixedContainer from "../fixedContainer/FixedContainer";

export interface ModalProps {
  title: String;
  subTitle: String;
  icon?: ReactSVGElement;
}

const ModalProvider = () => {
  const { isOpen, closeModal, props } = useModal();

  // const location = useLocation();
  // useEffect(() => {
  //   closeModal();
  // }, [location.pathname]);

  if (isOpen) {
    return (
      <FixedContainer
        justifyContent="center"
        zIndex={102}
        closeContainer={closeModal}
      >
        <MainModal {...props} />
      </FixedContainer>
    );
  }
  return;
};

export default ModalProvider;
