import styled from "@emotion/styled";
import theme from "@styles/theme";
import { ReactNode } from "react";

type MainBadgeProps = {
  borderColor: string;
  textColor: string;
  backgroundColor?: string;
  children: ReactNode;
  onClick?: () => void;
};

const BadgeContainer = styled.div<{
  borderColor: string;
  textColor: string;
  backgroundColor?: string;
}>`
  border-radius: 4px;
  border: 1px solid ${(props) => props.borderColor};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  color: ${(props) => props.textColor};
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  ${theme.typography["small2-2"]}
  min-height: 24px;
  cursor: pointer; /* 클릭 가능하다는 표시 */
  transition: all 0.2s ease; /* 부드러운 전환 효과 */

  &:hover {
    opacity: 0.8; /* 호버 효과 */
  }
`;

export const MainBadge = ({
  borderColor,
  textColor,
  backgroundColor = "white",
  children,
  onClick = () => {},
}: MainBadgeProps) => {
  return (
    <BadgeContainer
      borderColor={borderColor}
      textColor={textColor}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {children}
    </BadgeContainer>
  );
};
