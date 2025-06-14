import styled from "@emotion/styled";

import { useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { LoanInfoCard, LoanInfoProps } from "./_components/LoanInfoCard";
import { HorizontalDivider } from "@components/common/horizontalDivider/HorizontalDivider";
import { PawnCard } from "./_components/PawnCard";
import { ProgressRateSection } from "./_components/ProgressRateSection";
import Spacer from "@components/common/spacer/Spacer";

export interface CopyrightProps {
  isFold: boolean;
  onClick: () => void;
  imageUrl: string;
  name: string;
  type: string;
  ethPrice: string;
  wonPrice: string;
  title: string;
  singers: string;
  composers: string;
  lyricists: string;
  streamingUrls: string;
  isRegistered: string;
  registrationDoc: string;
}

export interface ProgressInfoProps {
  currentProgress: string;
  remainingProgress: string;
  remainingInvestingMoney: string;
}

export const InvestmentInfo = () => {
  const [isFold, setIsFold] = useState<boolean>(false);
  const { investmentId } = useParams();

  const navigate = useNavigate();

  console.log(investmentId);

  const DUMMY_LOAN: LoanInfoProps = {
    loanAmount: "160000000",
    monthlyInterest: "4000000원",
    repaymentMethod: "만기상환방식",
    annualInterestRate: "30%",
    totalRepaymentAmount: "0원",
    delinquencyRate: "5%",
    loanPeriod: "1년",
    repaymentRounds: "1회차",
    applicant: {
      name: "박세호",
      job: "학생",
    },
  };

  const DUMMY_COPYRIGHT = {
    imageUrl: "이미지 링크",
    name: "레전드 nft",
    type: "음원 NFT",
    ethPrice: "1.2987ETH",
    wonPrice: "28,439,433원",
    title: "강남스타일",
    singers: "싸이",
    composers: "내가 어케아노",
    lyricists: "싸이겠지 뭐",
    streamingUrls: "대충 유튜브 링크",
    isRegistered: "저작권이 등록되어 있는 음원",
    registrationDoc: "파일 url로 줘야될 거 같은데 될려나?",
  };

  const DUMMY_PROGRESS: ProgressInfoProps = {
    currentProgress: "30%",
    remainingProgress: "70%",
    remainingInvestingMoney: "약 7,000,000원",
  };
  return (
    <Wrapper>
      <LoanInfoCard {...DUMMY_LOAN} />
      <HorizontalDivider />
      <PawnCard
        {...DUMMY_COPYRIGHT}
        isFold={isFold}
        onClick={() => setIsFold(!isFold)}
      />
      <HorizontalDivider />
      <ProgressRateSection {...DUMMY_PROGRESS} />

      <Text>투자를 진행하고 매달 이자를 받아보세요!</Text>
      <Spacer height="0.625rem" />
      <Button onClick={() => navigate(`/investment-input/${investmentId}`)}>
        투자정보 입력하기
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 0 1.875rem;
  padding-bottom: 2.25rem;
`;

const Text = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.typography["body1-1"]}
  color: ${({ theme }) => theme.color.neutral.B70};
`;

const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  background-color: ${({ theme }) => theme.color.neutral.B50};
  border-radius: 0.25rem;

  ${({ theme }) => theme.typography["body1-2"]}
  color: ${({ theme }) => theme.color.neutral.white};
`;
