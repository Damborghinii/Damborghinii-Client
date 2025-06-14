import styled from "@emotion/styled";
import { IcLogo } from "@assets/svg";
import { useNavigate } from "react-router-dom";

const TopBarContainer = styled.nav`
  width: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  z-index: 2;

  border-bottom: 1px solid ${({ theme }) => theme.color.neutral.B10};
`;

export const TopBar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <TopBarContainer>
      <IcLogo width={40} height={40} onClick={() => navigate("/")} />
    </TopBarContainer>
  );
};
