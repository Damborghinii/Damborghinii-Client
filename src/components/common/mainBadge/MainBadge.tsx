import styled from "@emotion/styled";
import theme from "@styles/theme";
import { ReactNode } from "react";

type MainBadgeProps = {
  borderColor: string;
  textColor: string;
  children: ReactNode;
};

const BadgeContainer = styled.div<{ borderColor: string; textColor: string }>`
  border-radius: 4px;
  border: 1px solid ${(props) => props.borderColor};
  color: ${(props) => props.textColor};
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  ${theme.typography["small2-2"]}
`;

export const MainBadge = ({
  borderColor,
  textColor,
  children,
}: MainBadgeProps) => {
  return (
    <BadgeContainer borderColor={borderColor} textColor={textColor}>
      {children}
    </BadgeContainer>
  );
};
