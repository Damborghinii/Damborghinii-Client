import { css, Theme } from "@emotion/react";
import { TypographyKeyType } from "../../../styles/theme";
import { StatusChipColorKeyType } from "./StatusChip";

export const getFontStyle = (fontKey: TypographyKeyType, padding: string) => {
  return (theme: Theme) =>
    css`
      ${theme.typography[fontKey]};
      padding: ${padding};
    `;
};

export const getColorStyle = (
  variant: keyof Theme["color"],
  colorSet: {
    font: StatusChipColorKeyType;
    background: StatusChipColorKeyType;
  }
) => {
  return (theme: Theme) => {
    const colors = theme.color[variant] as Record<string, string>;
    return css`
      color: ${colors[colorSet.font]};
      background-color: ${colors[colorSet.background]};
    `;
  };
};

export const getDefaultLayout = () => {
  return css`
    max-width: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
  `;
};
