import { cardImage } from "@assets/image";
import { HorizontalDivider } from "@components/common/horizontalDivider/HorizontalDivider";
import Spacer from "@components/common/spacer/Spacer";
import styled from "@emotion/styled";
import theme from "@styles/theme";

interface TextProps {
  color?: string;
}

export interface BottomSectionProp {
  expectedMoney: string;
}

export const BottomSection = ({ expectedMoney }: BottomSectionProp) => {
  return (
    <CardWrapper>
      <RowTextWrapper>
        <BodyText color={theme.color.neutral.B70}>총 상환금액</BodyText>
        <BodyText color={theme.color.neutral.B70}>1,000,000원</BodyText>
      </RowTextWrapper>
      <Spacer height="0.625rem" />
      <RowTextWrapper>
        <SmallText color={theme.color.neutral.B40}>상환액</SmallText>
        <SmallText color={theme.color.neutral.B40}>
          1,000,000원 / 연이율 5%
        </SmallText>
      </RowTextWrapper>
      <Spacer height="0.625rem" />
      <HorizontalDivider />
      <Spacer height="0.625rem" />
      <RowTextWrapper>
        <SmallText color={theme.color.neutral.B70}>회차</SmallText>
        <SmallText color={theme.color.primary.P60}>4회차</SmallText>
      </RowTextWrapper>
      <Spacer height="0.625rem" />
      <RowTextWrapper>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <SmallText color={theme.color.neutral.B70}>상환일</SmallText>
          <SmallText color={theme.color.primary.P60}>7일 남았어요</SmallText>
        </div>
        <SmallText color={theme.color.primary.P60}>2025-06-25</SmallText>
      </RowTextWrapper>
      <Spacer height="0.625rem" />
      <NftCardWrapper>
        <img src={cardImage} alt="담보 카드" width={16} height={16} />
        담보
        <NftText>Lil Pudgy #2017</NftText>내 지분
        <NftText>n%</NftText>
      </NftCardWrapper>
    </CardWrapper>
  );
};

const BodyText = styled.h2<TextProps>`
  padding-top: 0.1rem;
  ${({ theme }) => theme.typography["body2-2"]}
  color: ${({ color }) => color}
`;

const SmallText = styled.h3<TextProps>`
  ${({ theme }) => theme.typography["small1-2"]}
  color: ${({ color }) => color}
`;

const CardWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.neutral.white};

  border-radius: 1rem;
  padding: 1rem;
`;

const RowTextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NftCardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.625rem;
  background-color: ${({ theme }) => theme.color.neutral.B00};

  border-radius: 0.4rem;

  ${({ theme }) => theme.typography["small2-3"]}
  color: ${({ theme }) => theme.color.neutral.B40};
`;

const NftText = styled.h3<TextProps>`
  ${({ theme }) => theme.typography["small2-2"]}
  color: ${({ theme }) => theme.color.neutral.B70};
`;
