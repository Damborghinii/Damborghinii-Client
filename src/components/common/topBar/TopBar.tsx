import { IcHamburgerButton, IcHeart } from "@assets/svg";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import theme from "@styles/theme";

const TopBarContainer = styled.nav`
  width: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  z-index: 2;

  border-bottom: 1px solid ${({ theme }) => theme.color.neutral.B10};
`;

const RightContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export const TopBar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <TopBarContainer>
      <img
        src="/src/assets/image/logo.png"
        width={40}
        height={40}
        onClick={() => navigate("/main")}
        style={{
          cursor: "pointer",
        }}
      />
      <RightContainer>
        <IcHeart
          width={24}
          height={24}
          fill="none"
          stroke="#3F3F46"
          onClick={() => alert("TODO")}
          style={{
            cursor: "pointer",
          }}
        />
        <IcHamburgerButton
          width={20}
          height={20}
          onClick={() => alert("TODO")}
          style={{
            cursor: "pointer",
          }}
        />
      </RightContainer>
    </TopBarContainer>
  );
};
