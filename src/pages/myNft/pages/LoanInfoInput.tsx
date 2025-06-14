import styled from "@emotion/styled";
import { NoticeSection } from "../_components/NoticeSection";
import { PriceInputSection } from "../_components/PriceInputSection";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const INTEREST_RATE = 0.3;
const MONTHS_IN_YEAR = 12;

const MIN_LOAN = 1000000;
const MAX_LOAN = 50000000;

interface ButtonProps {
  disabled?: boolean;
}

export const LoanInfoInput = () => {
  const { loanId } = useParams();
  const navigate = useNavigate();
  const [loanAmount, setLoanAmount] = useState<number>(0);
  const [round, setRound] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleLoanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericString = e.target.value.replace(/[^0-9]/g, "");
    const parsed = parseInt(numericString, 10);
    setLoanAmount(Number.isNaN(parsed) ? 0 : parsed);
  };

  const calculatedMonthlyInterest = Math.floor(
    (loanAmount * INTEREST_RATE) / MONTHS_IN_YEAR
  );

  useEffect(() => {
    if (loanAmount > 0 && round.length > 0) setIsDisabled(false);
    else setIsDisabled(true);
  }, [loanAmount, round]);

  return (
    <MainWrapper>
      <NoticeSection isFullScreen={false} hasButton={false} />
      <SectionWrapper>
        <Title>희망하는 대출정보를 입력해 주세요.</Title>
        <PriceInputSection
          title="희망 대출액"
          priceAmount={loanAmount}
          description={`최소 ${MIN_LOAN}원 ~ 최대 ${MAX_LOAN}원`}
          handleInputChange={handleLoanChange}
        />
        <PriceInputSection
          title="예상 월 이자"
          priceAmount={calculatedMonthlyInterest}
          description="연이율 30% 기준 자동 계산"
          isDisabled={true}
        />
        <PriceInputSection
          title="희망 상환 회차"
          priceAmount={round}
          description="1회~12회차 사이 입력 가능"
          unitText="회차"
          hasSubDescription={true}
          subDescription={`상환 회차는 월 단위 납부 회차를 의미하며,\n상환 회차에 따라 이자 납부 기간이 고정됩니다.`}
          isString={true}
          handleInputChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setRound(e.target.value)
          }
        />
        <Button
          disabled={isDisabled}
          onClick={() => navigate(`/loan-confirm/${loanId}`)}
        >
          최종 정보 확인
        </Button>
      </SectionWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  width: 100%;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.typography["body1-1"]}
  color: ${({ theme }) => theme.color.neutral.B60};
`;

const SectionWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem 1.875rem;
`;

const Button = styled.button<ButtonProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.neutral.B30 : theme.color.neutral.B50};
  border-radius: 0.25rem;

  ${({ theme }) => theme.typography["body1-2"]}
  color: ${({ theme }) => theme.color.neutral.white};

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s ease-in-out;
`;
