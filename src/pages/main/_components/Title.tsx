import { IcTitleArrowRight } from "@assets/svg";
import styled from "@emotion/styled";
import theme from "@styles/theme";
import { ReactNode } from "react";

type TitleType = {
  children: ReactNode;
  onClick?: () => void;
};

const Container = styled.div`
  width: 100%;
  padding: 20px 22px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${theme.color.neutral.B60};
  ${theme.typography["body1-1"]}
`;

export const Title = ({ children, onClick }: TitleType) => {
  return (
    <Container>
      {children}
      <IcTitleArrowRight onClick={onClick} width={14} height={14} />
    </Container>
  );
};
