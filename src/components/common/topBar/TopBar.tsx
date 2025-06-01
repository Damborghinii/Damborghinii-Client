import React from "react";
import styled from "@emotion/styled";
import { IcBugger, IcHeart, IcSearch } from "../../../assets/svg";

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
      <IconCantainer>
        <IcSearch width={14} height={14} />
        <IcHeart width={14} height={14} />
        <IcBugger width={14} height={14} />
      </IconCantainer>
    </TopBarContainer>
  );
};
