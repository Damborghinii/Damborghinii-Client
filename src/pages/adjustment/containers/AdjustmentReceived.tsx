import styled from "@emotion/styled";

import { SubTopBar } from "@components/common/topBar/SubTopBar";
import { AdjustmentCard } from "../_components/AdjustmentCard";
import { AdjustmentTab } from "../_components/AdjustmentTabBar";
import { BottomSection } from "../_components/BottomSection";

export const AdjustmentReceived = () => {
  return (
    <Wrapper>
      <SubTopBar title="내가 상환받아요" />
      <AdjustmentCard balance="1,600원" />
      <AdjustmentTab />
      <BottomSection expectedMoney="총 1,000,000원" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;
