import styled from "@emotion/styled";
import { IcArrowBack } from "@assets/svg";
import { useNavigate } from "react-router-dom";

interface SubTopBarProps {
  title: string;
}

const SubTopBarContainer = styled.nav`
  width: 100%;
  height: 3.5rem;
  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  gap: 0.625rem;

  z-index: 2;
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral.B10};
  ${({ theme }) => theme.typography["body1-1"]}
`;

const SubTopBarTitle = styled.h2`
  padding-top: 0.2rem;
`;

export const SubTopBar = ({ title }: SubTopBarProps) => {
  const navigate = useNavigate();
  return (
    <SubTopBarContainer>
      <IcArrowBack width={12} height={12} onClick={() => navigate(-1)} />
      <SubTopBarTitle>{title}</SubTopBarTitle>
    </SubTopBarContainer>
  );
};
