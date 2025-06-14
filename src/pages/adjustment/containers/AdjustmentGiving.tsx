import styled from "@emotion/styled";

import { SubTopBar } from "@components/common/topBar/SubTopBar";
import { AdjustmentCard } from "../_components/AdjustmentCard";
import { AdjustmentTab } from "../_components/AdjustmentTabBar";
import { BottomSection } from "../_components/BottomSection";

export const GivingAdjustment = () => {
  return (
    <Wrapper>
      <SubTopBar title="내가 상환해요" />
      <AdjustmentCard balance="1,600원" isReceivedType={false} />
      <AdjustmentTab />
      <BottomWrapper>
        <RowInfo>
          상환예정
          <BodyText>총 1,000,000원</BodyText>
        </RowInfo>
        <BottomSection />
        <BottomSection />
        <BottomSection />
      </BottomWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
`;

const BottomWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 1.25rem;

  flex-grow: 1;

  padding: 0 1.5rem;
  padding-bottom: 2rem;

  background-color: ${({ theme }) => theme.color.neutral.B00};
`;

const RowInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  gap: 0.75rem;

  padding-top: 1.25rem;

  ${({ theme }) => theme.typography["body1-2"]}
`;

const BodyText = styled.h2`
  padding-top: 0.1rem;
  ${({ theme }) => theme.typography["body2-2"]}

  color: ${({ theme }) => theme.color.primary.P50}
`;
