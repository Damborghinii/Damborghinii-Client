import styled from "@emotion/styled";
import { MainContent, MainTitle, SubTitle } from "./Text";
import Spacer from "@components/common/spacer/Spacer";
import { cardImage } from "@assets/image";
import { CopyrightInfo } from "../InvestmentInfo";

interface FlexProps {
  gap?: string;
}

export const PawnCard = (props: CopyrightInfo) => {
  return (
    <CardWrapper>
      <SubTitle>대출 담보</SubTitle>
      <Spacer height="0.5rem" />
      <PawnBadgeWrapper>
        <img src={cardImage} width={65} height={65} alt="담보 이미지" />
        <ColumnFlex gap="0.5rem">
          <RowFlex gap="0.5rem">
            <BadgeTitle>{props.name}</BadgeTitle>
            <BadgeTypeText>{props.type}</BadgeTypeText>
          </RowFlex>
          <PriceContainer>
            <RowFlex gap="0.25rem">
              <MainTitle>NFT가치</MainTitle>
              <MainContent isBlack={true}>{props.ethPrice}</MainContent>
            </RowFlex>
            <RowFlex gap="0.25rem">
              <MainTitle>한화가치</MainTitle>
              <MainContent isBlack={true}>{props.wonPrice}</MainContent>
            </RowFlex>
          </PriceContainer>
        </ColumnFlex>
      </PawnBadgeWrapper>
      <Spacer height="1.875rem" />
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 100%;
  padding: 1.875rem 0;
`;

const PawnBadgeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

const BadgeTitle = styled.div`
  ${({ theme }) => theme.typography["body1-2"]};
  color: ${({ theme }) => theme.color.neutral.B70};
`;

const ColumnFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-grow: 1;
  gap: ${({ gap }) => gap || "0"};
`;

const RowFlex = styled.div<FlexProps>`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap || "0"};
`;

const BadgeTypeText = styled.h2`
  ${({ theme }) => theme.typography["small1-2"]};
  color: ${({ theme }) => theme.color.neutral.B40};
`;

const PriceContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  gap: 0.75rem;
  padding: 0.625rem;

  border-radius: 0.25rem;

  background-color: ${({ theme }) => theme.color.primary.P10};
`;
