import { signUpIcons } from "@assets/icons";
import styled from "@emotion/styled";
import theme from "@styles/theme";
import React from "react";

const { check: Check } = signUpIcons;

type Props = {
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isIcon?: boolean;
  type?: string;
};

export const SingleInputSection = ({
  placeholder,
  value,
  onChange,
  isIcon,
  type,
}: Props) => {
  return (
    <InputWrapper>
      <InputSection
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
      />
      {isIcon && (
        <IconWrapper>
          <Check />
        </IconWrapper>
      )}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const InputSection = styled.input`
  font-size: ${theme.typography["body1-2"].fontSize};
  font-weight: ${theme.typography["body1-2"].fontWeight};
  width: 100%;
  height: 100%;
  padding: 8px;
  border: none;
  border-bottom: 1px solid ${theme.color.neutral.B20};
  outline: none;
  color: ${theme.color.neutral.B70};
  &::placeholder {
    color: ${theme.color.neutral.B20};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
