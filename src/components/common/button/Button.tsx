import styled from "@emotion/styled";
import theme from "../../../styles/theme";

type ButtonSize = "big" | "medium" | "small";
type ButtonVariant =
  | "primary"
  | "secondary"
  | "line-primary"
  | "line-secondary";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  size?: ButtonSize;
  fullWidth?: boolean;
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: () => void;
}

const sizeMap: Record<ButtonSize, { width: string; height: string }> = {
  big: { width: "338px", height: "52px" },
  medium: { width: "230px", height: "42px" },
  small: { width: "148px", height: "36px" },
};

const sizeToTypographyMap: Record<
  ButtonSize,
  { fontSize: string; fontWeight: number }
> = {
  big: theme.typography["body1-2"],
  medium: theme.typography["body2-2"],
  small: theme.typography["small1-2"],
};

const styleMap: Record<
  ButtonVariant,
  {
    enabled: {
      backgroundColor: string;
      textColor: string;
      borderColor: string;
    };
    disabled: {
      backgroundColor: string;
      textColor: string;
      borderColor: string;
    };
  }
> = {
  primary: {
    enabled: {
      backgroundColor: theme.color.primary.P50,
      textColor: theme.color.neutral.white,
      borderColor: theme.color.primary.P50,
    },
    disabled: {
      backgroundColor: theme.color.primary.P30,
      textColor: theme.color.neutral.white,
      borderColor: theme.color.primary.P30,
    },
  },
  secondary: {
    enabled: {
      backgroundColor: theme.color.neutral.B50,
      textColor: theme.color.neutral.white,
      borderColor: theme.color.neutral.B50,
    },
    disabled: {
      backgroundColor: theme.color.neutral.B30,
      textColor: theme.color.neutral.white,
      borderColor: theme.color.neutral.B30,
    },
  },
  "line-primary": {
    enabled: {
      backgroundColor: theme.color.primary.P00,
      textColor: theme.color.primary.P60,
      borderColor: theme.color.primary.P40,
    },
    disabled: {
      backgroundColor: theme.color.primary.P00,
      textColor: theme.color.primary.P30,
      borderColor: theme.color.primary.P30,
    },
  },
  "line-secondary": {
    enabled: {
      backgroundColor: theme.color.neutral.B00,
      textColor: theme.color.neutral.B60,
      borderColor: theme.color.neutral.B30,
    },
    disabled: {
      backgroundColor: theme.color.neutral.B00,
      textColor: theme.color.neutral.B30,
      borderColor: theme.color.neutral.B20,
    },
  },
};

const StyledButton = styled.button<{
  width: string;
  height: string;
  fontSize: string;
  fontWeight: number;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  fullWidth?: boolean;
}>`
  width: ${({ fullWidth, width }) => (fullWidth ? "100%" : width)};
  height: ${({ height }) => height};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    cursor: not-allowed;
  }
`;

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  variant = "primary",
  disabled = false,
  onClick,
  fullWidth = false,
  children,
}) => {
  const { width, height } = sizeMap[size];
  const { fontSize, fontWeight } = sizeToTypographyMap[size];
  const { backgroundColor, textColor, borderColor } = disabled
    ? styleMap[variant].disabled
    : styleMap[variant].enabled;

  return (
    <StyledButton
      width={width}
      height={height}
      fontSize={fontSize}
      fontWeight={fontWeight}
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
      disabled={disabled}
      onClick={onClick}
      fullWidth={fullWidth}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
