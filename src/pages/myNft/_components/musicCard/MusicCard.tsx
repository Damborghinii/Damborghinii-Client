import {
  ProgressBarFill,
  ProgressBarWrapper,
} from "@pages/main/_components/MainLoanCard";
import * as S from "./MusicCard.styled";
import mockImage from "@assets/image/mockImage.png";

export const MusicCard = () => {
  return (
    <S.CardContainer>
      <img src={mockImage} alt="NFT 대표사진" width={64} height={64} />
      <S.CardInfoWrapper>
        <>test</>
        <>
          <S.StatusTextWrapper>
            <S.StatusText>대출신청중</S.StatusText>
            <S.StatusText>67%</S.StatusText>
          </S.StatusTextWrapper>
          <ProgressBarWrapper>
            <ProgressBarFill percentage={67} />
          </ProgressBarWrapper>
        </>
      </S.CardInfoWrapper>
    </S.CardContainer>
  );
};
