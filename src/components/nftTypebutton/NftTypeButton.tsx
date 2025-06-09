import styled from "@emotion/styled";
import theme from "../../styles/theme";

type NftTypeButtonProps = {
  selected: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
  label: string;
};

const NftTypeButton = ({
  selected,
  onClick,
  icon,
  label,
}: NftTypeButtonProps) => {
  return (
    <Wrapper selected={selected} onClick={onClick}>
      {icon}
      <span>{label}</span>
    </Wrapper>
  );
};

export default NftTypeButton;

const Wrapper = styled.button<{ selected: boolean }>`
  padding: 10px 16px;
  border-radius: 12px;
  background-color: ${({ selected }) =>
    selected ? theme.color.primary.P00 : theme.color.neutral.B00};
  border: 1px solid
    ${({ selected }) => (selected ? theme.color.primary.P40 : "transparent")};
  color: ${({ selected }) =>
    selected ? theme.color.primary.P60 : theme.color.neutral.B60};
  font-size: ${theme.typography["body2-2"].fontSize};
  font-weight: ${theme.typography["body2-2"].fontWeight};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-sizing: border-box;
`;
