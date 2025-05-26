import styled from "@emotion/styled";
import theme from "../../../styles/theme";
import { commonIcons } from "../../../assets/icons";
import { keyframes } from "@emotion/react";
import { useState } from "react";

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to   { opacity: 0; }
`;

const slideUp = keyframes`
  from { transform: translateX(-50%) translateY(100%); }
  to   { transform: translateX(-50%) translateY(0); }
`;

const slideDown = keyframes`
  from { transform: translateX(-50%) translateY(0); }
  to   { transform: translateX(-50%) translateY(100%); }
`;

export interface Option {
  value: string;
  label: string;
}

interface BottomSheetProps {
  title?: string; //바텀시트 제목
  options: Option[]; //옵션 목록
  selected: string; //선택된 옵션 value값
  onSelect: (value: string) => void; //옵션 선택할 때 콜백함수
  onClose: () => void; //오버레이, 버튼 클릭 시 호출
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  title = "정렬순서",
  options,
  selected,
  onSelect,
  onClose,
}) => {
  const { close: Close } = commonIcons;
  const [isClosing, setIsClosing] = useState(false);
  const handleWrapperClick = (e: React.MouseEvent) => e.stopPropagation();

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  return (
    <Overlay closing={isClosing} onClick={handleClose}>
      <BottomSheetWrapper closing={isClosing} onClick={handleWrapperClick}>
        <CloseButton onClick={handleClose}>
          <Close />
        </CloseButton>
        <BottomSheetBody>
          <Header>{title}</Header>
          <OptionList>
            {options.map((option) => (
              <OptionItem key={option.value}>
                <input
                  type="radio"
                  id={option.value}
                  checked={selected === option.value}
                  onChange={() => {
                    onSelect(option.value);
                    handleClose();
                  }}
                />
                <label htmlFor={option.value}>{option.label}</label>
              </OptionItem>
            ))}
          </OptionList>
        </BottomSheetBody>
      </BottomSheetWrapper>
    </Overlay>
  );
};

const Overlay = styled.div<{ closing: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(87, 87, 87, 0.7);
  z-index: 999;
  animation: ${({ closing }) => (closing ? fadeOut : fadeIn)} 0.3s ease-out
    forwards;
`;

const BottomSheetWrapper = styled.div<{ closing: boolean }>`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 540px;
  animation: ${({ closing }) => (closing ? slideDown : slideUp)} 0.3s ease-out
    forwards;
`;

const BottomSheetBody = styled.div`
  height: 218px;
  padding: 22px 31px;
  background-color: ${theme.color.neutral.white};
  border-radius: 10px 10px 0 0;
  box-sizing: border-box;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -46px;
  right: 16px;
  cursor: pointer;
`;

const Header = styled.div`
  margin-bottom: 24px;
  font-size: ${theme.typography["body1-2"].fontSize};
  font-weight: ${theme.typography["body1-2"].fontWeight};
  color: ${theme.color.neutral.B70};
`;

const OptionList = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const OptionItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  & > input {
    cursor: pointer;
    vertical-align: middle;
    margin: 0;
    accent-color: ${theme.color.neutral.B50};
  }

  & > label {
    cursor: pointer;
    line-height: 18px;
    font-size: ${theme.typography["body2-3"].fontSize};
    font-weight: ${theme.typography["body2-3"].fontWeight};
    color: ${theme.color.neutral.B70};
  }
`;

export default BottomSheet;
