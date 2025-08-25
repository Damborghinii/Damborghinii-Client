import * as S from "./Modal.styled";
import Button from "../button/Button";
import { useModal } from "../../../hooks/useModal";
import { IcPopUp } from "../../../assets/svg";

export interface ModalProps {
  title?: string;
  sub?: React.ReactNode;
  content?: React.ReactNode;
  secondButton?: Omit<React.ComponentProps<typeof Button>, "disabled">;
  primaryButton?: Omit<React.ComponentProps<typeof Button>, "disabled">;
}

export const MainModal: React.FC<ModalProps> = (props: ModalProps) => {
  const { closeModal } = useModal();

  const {
    secondButton = { onClick: closeModal, children: "확인" },
    primaryButton = { onClick: closeModal, children: "취소" },
    ...modal
  } = props;

  return (
    <S.ModalContainer>
      <IcPopUp width={60} height={60} />
      <S.ModalTextWrapper>
        <S.ModalTextTitle>{modal.title}</S.ModalTextTitle>
        <S.ModalTextSub>{modal.sub}</S.ModalTextSub>
      </S.ModalTextWrapper>

      <S.ModalButtonContainer>
        <Button
          size="small"
          onClick={primaryButton.onClick}
          {...primaryButton}
          variant="line-primary"
        >
          {primaryButton.children}
        </Button>
        <Button size="small" onClick={secondButton.onClick} variant="primary">
          {secondButton.children}
        </Button>
      </S.ModalButtonContainer>
    </S.ModalContainer>
  );
};

export const SubModal: React.FC = () => {
  return <></>;
};
