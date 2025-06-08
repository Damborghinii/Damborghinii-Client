import styled from "@emotion/styled";
import { IcBugger, IcHeart, IcSearch, IcLogo } from "../../../assets/svg";

const TopBarContainer = styled.nav`
  width: 100%;
  padding: 0.5rem 1.25rem;
  display: flex;
  justify-content: space-between;
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
        <IcSearch width={25} height={25} onClick={() => {}} />
        <IcHeart width={25} height={25} onClick={() => {}} />
        <IcBugger width={25} height={25} onClick={() => {}} />
      </IconCantainer>
    </TopBarContainer>
  );
};
