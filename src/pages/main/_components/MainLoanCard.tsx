import { IcHeart } from "@assets/svg";
import styled from "@emotion/styled";
import theme from "@styles/theme";
import { cardImage } from "@assets/image";

export interface CardProps {
  loanAmount: number;
  interestRate: number;
  collateralName: string;
  presentValue: string;
  investmentProgressRate: number;
  onClick: () => void;
}

export const MainLoanCard: React.FC<CardProps> = ({
  loanAmount,
  interestRate,
  collateralName,
  presentValue,
  investmentProgressRate,
  onClick,
}: CardProps) => {
  return (
    <CardWrapper onClick={onClick}>
      <InfoWrapper>
        <TextWrapper>
          <FirstTitleText>대출신청액</FirstTitleText>
          <FirstContentText>{loanAmount}원</FirstContentText>
          <FirstTitleText>대출신청액</FirstTitleText>
          <FirstContentText>{interestRate}%</FirstContentText>
        </TextWrapper>
        <IcHeart width={24} height={24} fill={theme.color.neutral.B10} />
      </InfoWrapper>
      <SecondInfoWrapper>
        <img
          style={{
            borderRadius: "0.15rem",
          }}
          src={cardImage}
          width={16}
          height={16}
        />
        <SecondTitleText>담보</SecondTitleText>
        <SecondContentText>{collateralName}</SecondContentText>
        <SecondTitleText>현재가치</SecondTitleText>
        <SecondContentText>{presentValue}</SecondContentText>
      </SecondInfoWrapper>
      <HorizontalDivider />
      <InfoWrapper>
        <SecondaryText>투자 진행률</SecondaryText>
        <SecondaryText>{investmentProgressRate}%</SecondaryText>
      </InfoWrapper>
      <ProgressBarWrapper>
        <ProgressBarFill percentage={investmentProgressRate} />
      </ProgressBarWrapper>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;

  background-color: ${({ theme }) => theme.color.neutral.white};
  border-radius: 1rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 1.25rem;
`;

const TextWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
`;

const FirstTitleText = styled.h2`
  ${({ theme }) => theme.typography["body2-3"]};
  color: ${({ theme }) => theme.color.neutral.B60};
`;
const FirstContentText = styled.h3`
  ${({ theme }) => theme.typography["body2-2"]}
  color: ${({ theme }) => theme.color.neutral.B70};

  margin-right: 0.25rem;
`;

const SecondInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0 0.5rem;
  min-height: 1.25rem;
`;

const SecondTitleText = styled.h2`
  ${({ theme }) => theme.typography["small1-3"]};
  color: ${({ theme }) => theme.color.neutral.B40};
  margin-left: 0.25rem;
`;

export const SecondContentText = styled.h3`
  ${({ theme }) => theme.typography["small1-3"]};
  color: ${({ theme }) => theme.color.neutral.B70};

  margin-right: 0.25rem;
`;

const HorizontalDivider = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: ${({ theme }) => theme.color.neutral.B10};
`;

export const SecondaryText = styled.h2`
  ${({ theme }) => theme.typography["small1-2"]};
  color: ${({ theme }) => theme.color.secondary.S60};
`;

export const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 0.5rem;
  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.color.neutral.B00};
  overflow: hidden;
`;

export const ProgressBarFill = styled.div<{ percentage: number }>`
  height: 100%;
  width: ${({ percentage }) => `${percentage}%`};
  background-color: ${({ theme }) => theme.color.secondary.S60};
  transition: width 0.3s ease;
`;
