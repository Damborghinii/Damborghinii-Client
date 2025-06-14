import styled from "@emotion/styled";

import { SubTopBar } from "@components/common/topBar/SubTopBar";
import { MainContent } from "./_components/Text";
import { HorizontalDivider } from "@components/common/horizontalDivider/HorizontalDivider";
import { useState } from "react";
import Spacer from "@components/common/spacer/Spacer";
import { useNavigate } from "react-router-dom";

export interface LoanCalculationRule {
  minimumLoanAmount: number;
  maximumLoanAmount: number;
  shareCalculationRatio: number;
  interestCalculationRatio: number;
}
interface ButtonProps {
  disabled?: boolean;
}

// const MOCK_LOAN_CALCULATION_RULE: LoanCalculationRule = {
//   minimumLoanAmount: 1000000,
//   maximumLoanAmount: 50000000,
//   shareCalculationRatio: 5,
//   interestCalculationRatio: 2.5,
// };

export const InvestmentInfoInput = ({
  minimumLoanAmount = 1000000,
  maximumLoanAmount = 50000000,
  shareCalculationRatio = 5,
  interestCalculationRatio = 2.5,
}: LoanCalculationRule) => {
  const [investorAmount, setInvestorAmount] = useState<number>(0);

  const [checked, setChecked] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericString = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 허용
    const parsed = parseInt(numericString, 10);
    setInvestorAmount(Number.isNaN(parsed) ? 0 : parsed);
  };
  const sharePercent =
    investorAmount === 0 ? 0 : investorAmount / (shareCalculationRatio * 100);
  const monthlyProfit =
    investorAmount === 0 ? 0 : sharePercent * interestCalculationRatio;

  const navigate = useNavigate();

  return (
    <>
      <SubTopBar title={"투자 진행건"} />
      <Wrapper>
        <InvestWrapper>
          <Title>투자금액 입력</Title>
          <InvestInputWrapper>
            <SubText>투자 금액</SubText>
            <InputWrapper>
              <InvestInput
                type="text"
                inputMode="numeric"
                value={
                  investorAmount === 0 ? "" : investorAmount.toLocaleString()
                }
                onChange={handleInputChange}
              />
              <UnitText>원</UnitText>
            </InputWrapper>
            <InputBottomText>
              {`최소 ${minimumLoanAmount}원 ~ 최대 ${maximumLoanAmount}원`}
            </InputBottomText>
          </InvestInputWrapper>
        </InvestWrapper>
        <HorizontalDivider />
        <CalculateWrapper>
          <RowContainer>
            <MainContent isBlack={true}>대출에 대한 내 지분</MainContent>
            <MainContent>
              {investorAmount === 0 ? "0%" : `${sharePercent.toFixed(2)}%`}
            </MainContent>
          </RowContainer>
          <RowContainer>
            <MainContent isBlack={true}>매달 지급받는 이자</MainContent>
            <MainContent>
              {investorAmount === 0
                ? "0원"
                : `${Math.floor(monthlyProfit).toLocaleString()}원`}
            </MainContent>
          </RowContainer>
        </CalculateWrapper>
        <NoticeWrapper>
          <Title>유의사항을 확인해 주세요.</Title>
          <NoticeList>
            <li>
              투자 시 내 보유금액이 입력한 투자금액만큼 자동으로 인출되며,
              투자한 원금은 마지막 상환 회차에 돌려받을 수 있어요.
            </li>
            <Spacer height="0.75rem" />
            <li>
              투자가 진행되지 않을 경우, 인출되었던 투자금액은 시스템이 다시
              자동으로 지급해요.
            </li>
            <Spacer height="0.75rem" />

            <li>
              투자자를 통한 희망 대출금이 모두 모였을 경우 대출이 시작되어요.
              매달 상환일은 대출이 시작된 날 기준으로 계산되며, 대출이 시작된
              날이 매달 마지막 날일 경우에는 모든 상환일이 일괄적으로 각 달의
              마지막 날로 결정되어요.
            </li>
            <Spacer height="0.75rem" />

            <li>
              투자 시작 시, 내 투자 지분에 따라 대출자에게서 매달 이자를
              지급받아요. 마지막 상환 회차에는 남은 이자 및 투자 원금을 모두
              지급받아요.
            </li>
            <Spacer height="0.75rem" />

            <li>
              대출자가 정해진 상환일에 이자를 납부하지 않을 경우, 연체율 5%로
              매일 이자에 연체금이 추가되며 투자자의 지분대로 지급되어요.
            </li>
            <Spacer height="0.75rem" />

            <li>
              대출자가 남은 이자 및 원금을 모두 납부하지 않을 경우, NFT담보는
              경매로 넘어가며 경매 수익을 투자자 지분에 따라 나누어 가질 수
              있어요.
            </li>
          </NoticeList>
          <CheckWrapper>
            <CheckBox
              type="checkbox"
              id="confirmCheck"
              checked={checked}
              onChange={() => setChecked((prev) => !prev)}
            />
            <CheckLabel htmlFor="confirmCheck">
              위 내용을 모두 확인했습니다.
            </CheckLabel>
          </CheckWrapper>
          <Button disabled={!checked} onClick={() => navigate("/")}>
            투자하기
          </Button>
        </NoticeWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const InvestWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem 1.875rem;
`;

const Title = styled.h1`
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;

  ${({ theme }) => theme.typography["body1-1"]}
  color: ${({ theme }) => theme.color.neutral.B60};
`;

const InvestInputWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const InvestInput = styled.input`
  width: 100%;

  width: 100%;
  padding-right: 2rem; /* '원'이 들어갈 공간 확보 */
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral.B10};

  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.neutral.B20};
  }
`;

const SubText = styled.h2`
  ${({ theme }) => theme.typography["body2-2"]};

  color: ${({ theme }) => theme.color.neutral.B40};
`;

const UnitText = styled.span`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);

  font-size: 1rem;
  ${({ theme }) => theme.typography["body1-2"]};

  color: ${({ theme }) => theme.color.neutral.B40};
`;

const InputBottomText = styled.h2`
  ${({ theme }) => theme.typography["small1-3"]};

  color: ${({ theme }) => theme.color.neutral.B30};
`;

const CalculateWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  padding: 2.5rem 1.875rem;
`;

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NoticeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 1.875rem;
  gap: 2rem;
  background-color: ${({ theme }) => theme.color.neutral.B00};
`;

const NoticeList = styled.ul`
  list-style: disc;
  padding-left: 1rem;

  & > li {
    color: ${({ theme }) => theme.color.neutral.B60};
    ${({ theme }) => theme.typography["small1-3"]};
  }
`;

const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CheckBox = styled.input`
  width: 1rem;
  height: 1rem;
  border: 1px solid ${({ theme }) => theme.color.neutral.B20};
  border-radius: 0.2rem;
  appearance: none;
  cursor: pointer;

  &:checked {
    background-color: ${({ theme }) => theme.color.primary.P50};
    border-color: ${({ theme }) => theme.color.primary.P50};
  }

  &:checked::after {
    content: "✔";
    display: block;
    text-align: center;
    font-size: 0.75rem;
    color: white;
  }
`;

const CheckLabel = styled.label`
  ${({ theme }) => theme.typography["body1-2"]};
  color: ${({ theme }) => theme.color.neutral.B70};
  cursor: pointer;
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
