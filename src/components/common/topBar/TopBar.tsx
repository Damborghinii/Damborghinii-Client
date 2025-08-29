import { IcHamburgerButton, IcHeart } from "@assets/svg";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const TopBarContainer = styled.nav`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  z-index: 2;
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
        src="/logo.svg"
        width={130}
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
          onClick={() => navigate("/menu")}
          style={{
            cursor: "pointer",
          }}
        />
      </RightContainer>
    </TopBarContainer>
  );
};
