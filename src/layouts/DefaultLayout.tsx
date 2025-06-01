import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";

const DefaultLayout = () => {
  return (
    <OutletWrapper>
      <Outlet />
    </OutletWrapper>
  );
};

export default DefaultLayout;

const OutletWrapper = styled.section`
  display: flex;
  height: auto;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.primary.P20};
`;
