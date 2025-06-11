import styled from "@emotion/styled";

import { useState } from "react";

import { SubTopBar } from "@components/common/topBar/SubTopBar";
import { useParams } from "react-router-dom";
import { LoanInfoCard, LoanInfoProps } from "./_components/LoanInfoCard";
import { HorizontalDivider } from "@components/common/horizontalDivider/HorizontalDivider";
import { PawnCard } from "./_components/PawnCard";
import { ProgressRateSection } from "./_components/ProgressRateSection";

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
  console.log(investmentId);

  const DUMMY_LOAN: LoanInfoProps = {
    loanAmount: "1000원",
    monthlyInterest: "300원",
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
    <>
      <SubTopBar title={"투자 진행 건"} />
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
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 0 1.875rem;
  padding-bottom: 2.25rem;
`;
