import * as S from "./StatusChip.styled";
import { TypographyKeyType } from "../../../styles/theme";
import {
  NeutralKeyType,
  SecondaryKeyType,
  WarningKeyType,
} from "../../../styles/theme";

type StatusChipSizeType = "small" | "big";
type StatusChipVariantType = "neutral" | "secondary" | "warning";

export type StatusChipColorKeyType =
  | NeutralKeyType
  | SecondaryKeyType
  | WarningKeyType;

export type StatusChipProps<T extends React.ElementType> = {
  as?: T;
  size?: StatusChipSizeType;
  variant?: StatusChipVariantType;
  padding?: string;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

const mapFontSize: Record<StatusChipSizeType, TypographyKeyType> = {
  small: "small1-2",
  big: "body2-2",
};

const mapColors: Record<
  StatusChipVariantType,
  {
    font: StatusChipColorKeyType;
    background: StatusChipColorKeyType;
  }
> = {
  neutral: {
    font: "B50",
    background: "B00",
  },
  secondary: {
    font: "S60",
    background: "S10",
  },
  warning: {
    font: "W30",
    background: "W00",
  },
};

const StatusChip = <T extends React.ElementType>(props: StatusChipProps<T>) => {
  const {
    as = "span",
    size = "small",
    variant = "neutral",
    padding = "0.4rem 0.5rem",
    children,
    ...attribute
  } = props;

  const Component = as;

  return (
    <Component
      css={[
        S.getFontStyle(mapFontSize[size], padding),
        S.getColorStyle(variant, mapColors[variant]),
        S.getDefaultLayout(),
      ]}
      {...attribute}
    >
      {children}
    </Component>
  );
};

export default StatusChip;
