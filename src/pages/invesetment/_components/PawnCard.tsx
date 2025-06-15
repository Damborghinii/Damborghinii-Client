import styled from "@emotion/styled";
import {
  MainContent,
  MainTitle,
  NewMainContent,
  NewMainTitle,
  SubTitle,
} from "./Text";
import Spacer from "@components/common/spacer/Spacer";
import { cardImage } from "@assets/image";
import { CopyrightProps } from "../InvestmentInfo";
import { IcArrowDown } from "@assets/svg";
import { HorizontalDivider } from "@components/common/horizontalDivider/HorizontalDivider";
import SvgIcDownload from "@assets/svg/IcDownload";

interface FlexProps {
  gap?: string;
}

export const PawnCard = ({
  isFold = false,
  onClick,
  ...props
}: CopyrightProps) => {
  return (
    <CardWrapper>
      <SubTitle>대출 담보</SubTitle>
      <Spacer height="0.5rem" />
      <PawnBadgeWrapper>
        <img
          src={props.imageUrl || cardImage}
          width={65}
          height={65}
          alt="담보이미지"
        />
        <ColumnFlex gap="0.5rem">
          <RowFlex gap="0.5rem">
            <BadgeTitle>{props.title}</BadgeTitle>
            <BadgeTypeText>{props.type}</BadgeTypeText>
          </RowFlex>
          <PriceContainer>
            <RowFlex gap="0.25rem">
              <NewMainTitle>NFT</NewMainTitle>
              <NewMainContent isBlack={true}>{props.ethPrice}</NewMainContent>
            </RowFlex>
            <RowFlex gap="0.25rem">
              <NewMainTitle>한화</NewMainTitle>
              <NewMainContent isBlack={true}>{props.wonPrice}</NewMainContent>
            </RowFlex>
          </PriceContainer>
        </ColumnFlex>
      </PawnBadgeWrapper>
      <Spacer height="1.875rem" />
      <DetailContainer onClick={onClick}>
        상세정보
        <IcArrowDown width={14} height={14} />
      </DetailContainer>
      <Spacer height="1.5rem" />
      {isFold && (
        <DetailFoldContainer>
          <FoldInnerContainer>
            <RowContainer>
              <MainTitle>음원/앨범명</MainTitle>
              <MainContent isBlack={true}>{props.musicTitle}</MainContent>
            </RowContainer>
            <HorizontalDivider />
            <RowContainer>
              <MainTitle>가수 정보</MainTitle>
              <MainContent isBlack={true}>{props.singers}</MainContent>
            </RowContainer>
            <HorizontalDivider />

            <RowContainer>
              <MainTitle>작곡가 정보</MainTitle>
              <MainContent isBlack={true}>{props.composers}</MainContent>
            </RowContainer>
            <HorizontalDivider />

            <RowContainer>
              <MainTitle>작사가 정보</MainTitle>
              <MainContent isBlack={true}>{props.lyricists}</MainContent>
            </RowContainer>
          </FoldInnerContainer>

          <FoldInnerContainer>
            <RowContainer>
              <MainTitle>저작권 정보</MainTitle>
              <MainContent isBlack={true}>{props.isRegistered}</MainContent>
            </RowContainer>
            <HorizontalDivider />
            <RowContainer>
              <MainTitle>저작권 등록증</MainTitle>
              <SvgIcDownload
                width={16}
                height={16}
                onClick={() => window.open(props.registrationDoc)}
              />
            </RowContainer>
          </FoldInnerContainer>

          <FoldInnerContainer>
            <RowContainer>
              <MainTitle>음원 스트리밍 URL</MainTitle>
            </RowContainer>
            <HorizontalDivider />
            <ColumnContiner>
              <MainContent
                isBlack={true}
                onClick={() => window.open(props.streamingUrls)}
              >
                {props.streamingUrls}
              </MainContent>
            </ColumnContiner>
          </FoldInnerContainer>
        </DetailFoldContainer>
      )}
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

const DetailContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.625rem;
  border: 1px solid ${({ theme }) => theme.color.neutral.B10};
  border-radius: 0.25rem;

  ${({ theme }) => theme.typography["small1-3"]}
  color: ${({ theme }) => theme.color.neutral.B60}
`;

const DetailFoldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const FoldInnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  border: 1px solid ${({ theme }) => theme.color.neutral.B10};

  border-radius: 0.25rem;
`;

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0.625rem;
`;

const ColumnContiner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  padding: 0.75rem 0.625rem;
`;
