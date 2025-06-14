import styled from "@emotion/styled";
import theme from "@styles/theme";
import { InputMask } from "@react-input/mask";

type Props = {
  mask: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const MaskedInputSection = ({ mask, value, onChange, placeholder }: Props) => {
  return (
    <InputWrapper>
      <InputMask
        mask={mask}
        replacement={{ _: /\d/ }}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        css={{
          fontSize: theme.typography["body1-2"].fontSize,
          fontWeight: theme.typography["body1-2"].fontWeight,
          width: "100%",
          padding: "8px",
          border: "none",
          borderBottom: `1px solid ${theme.color.neutral.B20}`,
          outline: "none",
          color: theme.color.neutral.B70,
          "::placeholder": {
            color: theme.color.neutral.B20,
          },
        }}
      />
    </InputWrapper>
  );
};

export default MaskedInputSection;

const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
