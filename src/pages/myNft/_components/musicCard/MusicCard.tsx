import * as S from "./MusicCard.styled";
import mockImage from "@assets/image/mockImage.png";

export const MusicCard = () => {
  return (
    <S.CardContainer>
      <img src={mockImage} alt="NFT 대표사진" width={64} height={64} />
      <S.CardInfoWrapper>test</S.CardInfoWrapper>
    </S.CardContainer>
  );
};
