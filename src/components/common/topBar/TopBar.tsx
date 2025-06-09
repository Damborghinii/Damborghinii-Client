import styled from "@emotion/styled";
import { IcBugger, IcHeart, IcSearch, IcLogo } from "../../../assets/svg";

const TopBarContainer = styled.nav`
  width: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  z-index: 2;
`;

const IconCantainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const TopBar: React.FC = () => {
  return (
    <TopBarContainer>
      <IcLogo width={40} height={40} onClick={() => {}} />
      <IconCantainer>
        <IcSearch width={20} height={20} onClick={() => {}} />
        <IcHeart width={20} height={20} onClick={() => {}} />
        <IcBugger width={20} height={20} onClick={() => {}} />
      </IconCantainer>
    </TopBarContainer>
  );
};
