import {
  ProgressBarFill,
  ProgressBarWrapper,
} from "@pages/main/_components/MainLoanCard";
import * as S from "./MusicCard.styled";
import { useNavigate } from "react-router-dom";

type Status = "ALL" | "REGISTERED" | "INVESTING" | "COMPLETED";

type MusicCardProps = {
  imageUrl: string;
  title: string;
  status: Status;
  progress?: number | null;
  copyrightId: number;
};

const statusLabelMap: Record<Status, string> = {
  ALL: "전체",
  REGISTERED: "등록",
  INVESTING: "대출신청중",
  COMPLETED: "상환중",
};

export const MusicCard = ({
  imageUrl,
  title,
  status,
  progress,
  copyrightId,
}: MusicCardProps) => {
  const pct = progress ? progress : 0;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/myNft/detail/${copyrightId}`);
  };
  return (
    <S.CardContainer onClick={handleClick}>
      <img src={imageUrl} alt="NFT 대표사진" width={64} height={64} />
      <S.CardInfoWrapper>
        <>{title}</>
        <>
          <S.StatusTextWrapper>
            <S.StatusText>{statusLabelMap[`${status}`]}</S.StatusText>
            <S.StatusText>{pct}%</S.StatusText>
          </S.StatusTextWrapper>
          <ProgressBarWrapper>
            <ProgressBarFill percentage={pct} />
          </ProgressBarWrapper>
        </>
      </S.CardInfoWrapper>
    </S.CardContainer>
  );
};
