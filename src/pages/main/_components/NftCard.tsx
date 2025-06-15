import * as S from "@pages/myNft/MyNft.styled";

import styled from "@emotion/styled";

import Spacer from "@components/common/spacer/Spacer";
import StatusChip from "@components/common/statusChip/StatusChip";
import { MyNftType } from "../../myNft/type/nft";
import { StatusChipVariantType } from "@components/common/statusChip/StatusChip";
import { HorizontalDivider } from "@components/common/horizontalDivider/HorizontalDivider";

export const NftCard = ({
  image,
  nftName,
  value,
  nftType,
  isRegistered,
  onClick,
  id,
}: MyNftType) => {
  const statusType: StatusChipVariantType = isRegistered
    ? "secondary"
    : "neutral";
  return (
    <CardWrapper>
      <S.RowFlex gap="0.625rem">
        <img src={image} width={40} height={40} />
        <S.ColumnFlex gap="0.5rem">
          <S.CardTitle>{nftName}</S.CardTitle>
          <S.RowFlex>
            <S.NewSmallText>현재가치</S.NewSmallText>
            <Spacer width="0.25rem" height="100%" />
            <S.NewSmallText isBlack={true}>{value}</S.NewSmallText>
            <Spacer width="0.75rem" height="100%" />
            <S.NewSmallText>유형</S.NewSmallText>
            <Spacer width="0.25rem" height="100%" />
            <S.NewSmallText isBlack={true}>{nftType}</S.NewSmallText>
          </S.RowFlex>
        </S.ColumnFlex>
        <StatusChip variant={statusType}>
          {isRegistered ? "진행중" : "등록"}
        </StatusChip>
      </S.RowFlex>
      {!isRegistered && (
        <>
          <Spacer height="0.625rem" />
          <HorizontalDivider />
          <Spacer height="0.625rem" />
          <RegisterButton onClick={() => onClick(id)}>대출 신청</RegisterButton>
        </>
      )}
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.color.neutral.white};

  padding: 1rem;
  border-radius: 1rem;
`;

const RegisterButton = styled.button`
  max-width: 9.25rem;
  padding: 0.625rem 2rem;

  border-radius: 0.25rem;
  ${({ theme }) => theme.typography["small1-2"]}
  color: ${({ theme }) => theme.color.neutral.white};

  color: ${({ theme }) => theme.color.neutral.white};
  background-color: ${({ theme }) => theme.color.neutral.B50};
`;
