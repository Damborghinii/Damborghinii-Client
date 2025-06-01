import React from "react";
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
      <IcLogo width={20} height={20} onClick={() => {}} />
      <IconCantainer>
        <IcSearch width={14} height={14} onClick={() => {}} />
        <IcHeart width={14} height={14} onClick={() => {}} />
        <IcBugger width={14} height={14} onClick={() => {}} />
      </IconCantainer>
    </TopBarContainer>
  );
};
