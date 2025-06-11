import styled from "@emotion/styled";
import { IcArrowBack } from "@assets/svg";
import { useNavigate } from "react-router-dom";
import theme from "@styles/theme";
import { useConfirmButton } from "src/contexts/ConfirmButtonContext";

interface SubTopBarProps {
  title?: string;
  isConfirmButton?: boolean;
}

const SubTopBarContainer = styled.nav`
  width: 100%;
  height: 3.5rem;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  z-index: 2;
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral.B10};
  ${({ theme }) => theme.typography["body1-1"]}
  justify-content: space-between;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  cursor: pointer;
`;

const SubTopBarTitle = styled.h2`
  padding-top: 0.2rem;
`;

const ConfirmButton = styled.div`
  ${({ theme }) => theme.typography["body1-1"]};
  color: ${theme.color.neutral.B70};
  cursor: pointer;
`;

export const SubTopBar = ({ title, isConfirmButton }: SubTopBarProps) => {
  const navigate = useNavigate();
  const { onConfirmClick } = useConfirmButton();
  return (
    <SubTopBarContainer>
      <LeftSection>
        <IcArrowBack width={12} height={12} onClick={() => navigate(-1)} />
        {title && <SubTopBarTitle>{title}</SubTopBarTitle>}
      </LeftSection>
      {isConfirmButton && onConfirmClick && (
        <ConfirmButton onClick={onConfirmClick}>확인</ConfirmButton>
      )}
    </SubTopBarContainer>
  );
};
