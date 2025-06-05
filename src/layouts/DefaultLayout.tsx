import { Outlet } from "react-router-dom";
import { TopBar } from "@components/common/topBar/TopBar";
import styled from "@emotion/styled";

const DefaultLayout = () => {
  return (
    <OutletWrapper>
      <TopBar />
      <Outlet />
    </OutletWrapper>
  );
};

export default DefaultLayout;

const OutletWrapper = styled.section`
  display: flex;
  height: auto;
  flex-direction: column;
`;
