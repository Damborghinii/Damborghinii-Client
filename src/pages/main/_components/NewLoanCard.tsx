import { IcHeart } from "@assets/svg";
import { MainBadge } from "@components/common/mainBadge/MainBadge";
import styled from "@emotion/styled";
import theme from "@styles/theme";
import { useEffect, useState } from "react";
import { NewContract } from "@apis/getMain";

const calculateTimeLeft = (expirationDate: string): string => {
  const now = new Date();
  const expiry = new Date(expirationDate);
  const timeDiff = expiry.getTime() - now.getTime();

  if (timeDiff <= 0) {
    return "종료됨";
  }

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  if (days > 0) {
    return `종료까지 ${days}일 ${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  } else {
    return `종료까지 ${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
};

type NewLoanCardProps = {
  contract: NewContract;
  onClick?: () => void;
};

const CardContainer = styled.div`
  width: 100%;
  padding: 0 22px;
  display: flex;
  gap: 12px;
  align-items: center;
  cursor: pointer;
`;

const CardImage = styled.div<{ imageUrl: string }>`
  width: 82px;
  height: 82px;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 84px;
  flex-direction: column;
  justify-content: space-between;
`;

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${theme.typography["body1-1"]}
  color: ${theme.color.neutral.B70}
`;

const SubTitleWrapper = styled.div`
  display: flex;
  gap: 8px;

  ${theme.typography["small1-2"]}
  color: ${theme.color.neutral.B30}
`;

const ExpirationText = styled.h2`
  ${theme.typography["small1-2"]}
  color: ${theme.color.warning.R30}
`;

const BadgeWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

// 이자율을 퍼센트로 변환
const formatInterestRate = (rate: string): string => {
  const numRate = parseFloat(rate) * 100;
  return `연이율 ${Math.trunc(numRate)}%`;
};

// 진행률에 따라 배지 색상 결정
const getProgressBadgeColor = (progress: string) => {
  const progressNum = parseFloat(progress.replace("%", ""));
  if (progressNum >= 50) {
    return {
      borderColor: theme.color.secondary.S30,
      textColor: theme.color.secondary.S60,
    };
  }
  return {
    borderColor: theme.color.warning.W10,
    textColor: theme.color.warning.W30,
  };
};

export const NewLoanCard = ({ contract, onClick }: NewLoanCardProps) => {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    if (!contract.expirationTime) return;

    // 초기 시간 설정
    setTimeLeft(calculateTimeLeft(contract.expirationTime));

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(contract.expirationTime);
      setTimeLeft(newTimeLeft);

      if (newTimeLeft === "종료됨") {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [contract.expirationTime]);

  const progressBadgeColor = getProgressBadgeColor(contract.progress);

  return (
    <CardContainer onClick={onClick}>
      <CardImage imageUrl={contract.copyright.imageUrl.trim()} />
      <ColumnWrapper>
        <RowWrapper>
          <TitleWrapper>
            {contract.copyright.name}
            <SubTitleWrapper>
              {contract.loanAmount}
              {contract.expirationTime && timeLeft && (
                <ExpirationText>{timeLeft}</ExpirationText>
              )}
            </SubTitleWrapper>
          </TitleWrapper>
          <IcHeart width={18} height={18} stroke={theme.color.neutral.B60} />
        </RowWrapper>
        <BadgeWrapper>
          <MainBadge
            borderColor={theme.color.neutral.B20}
            textColor={theme.color.neutral.B40}
          >
            {contract.repaymentCount}회차
          </MainBadge>
          <MainBadge
            borderColor={theme.color.neutral.B20}
            textColor={theme.color.neutral.B40}
          >
            {formatInterestRate(contract.interestRate)}
          </MainBadge>
          <MainBadge
            borderColor={progressBadgeColor.borderColor}
            textColor={progressBadgeColor.textColor}
          >
            진행률 {contract.progress}
          </MainBadge>
        </BadgeWrapper>
      </ColumnWrapper>
    </CardContainer>
  );
};
