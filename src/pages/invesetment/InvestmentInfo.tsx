import styled from "@emotion/styled";

import { useEffect, useState } from "react";

import { getContractDetail } from "@apis/investment";

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
  title: string;
  type: string;
  ethPrice: string;
  wonPrice: string;
  musicTitle: string;
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
  const [loanInfo, setLoanInfo] = useState<LoanInfoProps | null>(null);
  const [copyright, setCopyright] = useState<CopyrightProps | null>(null);
  const [progress, setProgress] = useState<ProgressInfoProps | null>(null);

  const [isFold, setIsFold] = useState<boolean>(false);
  const { investmentId } = useParams();

  const navigate = useNavigate();

  console.log(investmentId);

  useEffect(() => {
    const fetchData = async () => {
      if (!investmentId) return;

      const res = await getContractDetail(Number(investmentId));
      if (res.success && res.data) {
        const { contract, user, copyright, progress: prog } = res.data;

        setLoanInfo({
          loanAmount: contract.loanAmount,
          monthlyInterest: contract.monthlyInterest,
          repaymentMethod: contract.loanType,
          annualInterestRate: contract.interestRate,
          totalRepaymentAmount: contract.paymentAmount,
          delinquencyRate: contract.overdueRate,
          loanPeriod: contract.repaymentPeriod,
          repaymentRounds: contract.repaymentCount,
          applicant: {
            name: user.name,
            job: user.job,
          },
        });

        setCopyright({
          ...copyright,
          isFold,
          onClick: () => setIsFold(!isFold),
        });

        setProgress({
          currentProgress: prog.currentProgress,
          remainingProgress: `${
            100 - parseInt(prog.currentProgress.replace(/[^0-9]/g, ""))
          }%`,
          remainingInvestingMoney: prog.remainingInvestingMoney,
        });
      }
    };

    fetchData();
  }, [investmentId, isFold]);

  return (
    <Wrapper>
      {loanInfo && <LoanInfoCard {...loanInfo} />}
      <HorizontalDivider />
      {copyright && <PawnCard {...copyright} />}
      <HorizontalDivider />
      {progress && <ProgressRateSection {...progress} />}

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
