import styled from "@emotion/styled";
import theme from "../../../styles/theme";
import Button from "../../common/button/Button";
import { commonIcons } from "../../../assets/icons";

const { close: Close } = commonIcons;

const InputTitle = styled.label`
  font-size: ${theme.typography["body2-2"].fontSize};
  font-weight: ${theme.typography["body2-2"].fontWeight};
  color: ${theme.color.neutral.B40};
  margin-right: 8px;
`;

const LabelRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const InputGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin-bottom: 12px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;

const Input = styled.input`
  flex: 1;
  width: 100%;
  padding: 8px 3.5px;
  font-size: ${theme.typography["body1-2"].fontSize};
  font-weight: ${theme.typography["body1-2"].fontWeight};
  color: ${theme.color.neutral.B40};
  border: none;
  border-bottom: 1px solid ${theme.color.neutral.B20};
  outline: none;

  &::placeholder {
    color: ${theme.color.neutral.B20};
  }
`;

const RemoveButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MultiInputSection = ({
  title,
  placeholder,
  values,
  buttonText,
  onChange,
  onAdd,
  onRemove,
}: {
  title: string;
  placeholder: string;
  values: string[];
  buttonText: string;
  onChange: (idx: number, value: string) => void;
  onAdd: () => void;
  onRemove: (idx: number) => void;
}) => {
  return (
    <InputGroupContainer>
      <LabelRow>
        <InputTitle>{title}</InputTitle>
      </LabelRow>
      {values.map((val, idx) => (
        <RowWrapper key={idx}>
          <InputWrapper>
            <Input
              placeholder={placeholder}
              value={val}
              onChange={(e) => onChange(idx, e.target.value)}
            />
            {values.length > 1 && idx !== 0 && (
              <RemoveButton
                style={{ color: theme.color.neutral.B60 }}
                onClick={() => onRemove(idx)}
              >
                <Close width={22} height={22} />
              </RemoveButton>
            )}
          </InputWrapper>
        </RowWrapper>
      ))}
      <Button
        children={buttonText}
        size="medium"
        variant="line-secondary"
        onClick={onAdd}
      />
    </InputGroupContainer>
  );
};
