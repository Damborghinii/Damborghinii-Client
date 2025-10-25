import { useState } from "react";
import styled from "@emotion/styled";
import theme from "@styles/theme";
import Spacer from "@components/common/spacer/Spacer";
import { HorizontalDivider } from "@components/common/horizontalDivider/HorizontalDivider";
import { BadgeScroll } from "./BadgeScroll";

// 거래 타입 상수
const TRANSACTION_TYPE = {
  WITHDRAWAL: "인출",
  DEPOSIT: "충전",
  CHARGE: "출금",
  INCOME: "입금",
} as const;

// 거래 내역 타입
interface Transaction {
  id: string;
  date: string;
  time: string;
  type: string;
  amount: number;
  description?: string;
}

// 더미 데이터
const mockTransactions: Transaction[] = [
  {
    id: "1",
    date: "8.16",
    time: "00:00",
    type: TRANSACTION_TYPE.WITHDRAWAL,
    amount: -1600,
    description: "내계좌",
  },
  {
    id: "2",
    date: "8.15",
    time: "00:00",
    type: TRANSACTION_TYPE.DEPOSIT,
    amount: 1600,
    description: "내계좌",
  },
  {
    id: "3",
    date: "8.14",
    time: "00:00",
    type: TRANSACTION_TYPE.WITHDRAWAL,
    amount: -1600,
    description: "내계좌",
  },
  {
    id: "4",
    date: "8.13",
    time: "00:00",
    type: TRANSACTION_TYPE.INCOME,
    amount: 1600,
    description: "I'm the problem 3회차",
  },
  {
    id: "5",
    date: "8.13",
    time: "00:00",
    type: TRANSACTION_TYPE.CHARGE,
    amount: -1600,
    description: "아마겟돈 투자",
  },
  {
    id: "6",
    date: "8.12",
    time: "00:00",
    type: TRANSACTION_TYPE.INCOME,
    amount: 1600,
    description: "I'm the problem 2회차",
  },
];

export const WalletDetailPage = () => {
  const [selectedKey, setSelectedKey] = useState(0); // 기본값: 전체(0)

  // 선택된 필터에 따라 거래 내역 필터링
  const filteredTransactions = mockTransactions.filter((transaction) => {
    if (selectedKey === 0) return true; // 전체
    if (selectedKey === 1) return transaction.type === TRANSACTION_TYPE.CHARGE; // 출금
    if (selectedKey === 2) return transaction.type === TRANSACTION_TYPE.INCOME; // 입금
    if (selectedKey === 3) return transaction.type === TRANSACTION_TYPE.DEPOSIT; // 충전
    if (selectedKey === 4)
      return transaction.type === TRANSACTION_TYPE.WITHDRAWAL; // 인출
    return true;
  });

  return (
    <PageContainer>
      <ContentContainer>
        <WalletInfoSectionD>
          <img src="/src/assets/icons/money.svg" sizes="16" />
          <WalletText>
            보유 금액 <WalletAmount>1,600원</WalletAmount>
          </WalletText>
        </WalletInfoSectionD>
        <Spacer height="12px" />
        <WalletInfoSectionG>
          <img src="/src/assets/icons/arr.svg" sizes="14" />
          인출 대기
          <WalletAmountG>1,600원</WalletAmountG>
        </WalletInfoSectionG>
      </ContentContainer>
      <Spacer height="24px" />
      <HorizontalDivider />
      <Spacer height="1rem" />
      <BadgeScroll selectedKey={selectedKey} onKeyChange={setSelectedKey} />
      <Spacer height="1rem" />

      {/* 거래 내역 리스트 */}
      <TransactionListContainer>
        {filteredTransactions.map((transaction) => (
          <TransactionItem key={transaction.id}>
            <DateSection>
              <DateText>{transaction.date}</DateText>
              <TimeText>{transaction.time}</TimeText>
            </DateSection>
            <TransactionInfo>
              <TransactionType>{transaction.type}</TransactionType>
              <TransactionDesc>{transaction.description}</TransactionDesc>
            </TransactionInfo>
            <AmountText isPositive={transaction.amount > 0}>
              {transaction.amount > 0 ? "+" : ""}
              {transaction.amount.toLocaleString()}원
            </AmountText>
          </TransactionItem>
        ))}
      </TransactionListContainer>

      {/* 하단 버튼 */}
      <ButtonContainer>
        <ActionButton primary onClick={() => alert("todo something")}>
          충전하기
        </ActionButton>
        <ActionButton onClick={() => alert("todo something")}>
          인출하기
        </ActionButton>
      </ButtonContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  height: calc(100vh - 3.5rem);
  background-color: ${theme.color.neutral.white};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.5rem 0;
`;

const WalletInfoSectionD = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.color.neutral.B40};
  ${({ theme }) => theme.typography["body2-2"]}
  background-color: ${({ theme }) => theme.color.neutral.B00};
  border-radius: 0.5rem;
`;

const WalletText = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  ${({ theme }) => theme.typography["body2-2"]}
`;

const WalletAmount = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.neutral.B60};
  ${({ theme }) => theme.typography["title1-1"]}
`;

const WalletAmountG = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.secondary.S60};
  ${({ theme }) => theme.typography["title1-1"]}
`;

const WalletInfoSectionG = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.color.secondary.S60};
  ${({ theme }) => theme.typography["body2-2"]}
  background-color: ${({ theme }) => theme.color.secondary.S10};
  border-radius: 0.5rem;
`;

const TransactionListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 1.5rem;
  min-height: 0; // flex item이 overflow 작동하도록 필수

  /* 스크롤바 스타일링 (선택사항) */
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.neutral.B20};
    border-radius: 2px;
  }
`;

const TransactionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral.B10};

  &:last-child {
    border-bottom: none;
  }
`;

const DateSection = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 3rem;
  margin-right: 1rem;
`;

const DateText = styled.div`
  color: ${({ theme }) => theme.color.neutral.B60};
  ${({ theme }) => theme.typography["body2-1"]}
`;

const TimeText = styled.div`
  color: ${({ theme }) => theme.color.neutral.B40};
  ${({ theme }) => theme.typography["small1-1"]}
`;

const TransactionInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const TransactionType = styled.div`
  color: ${({ theme }) => theme.color.neutral.B60};
  ${({ theme }) => theme.typography["body2-1"]}
`;

const TransactionDesc = styled.div`
  color: ${({ theme }) => theme.color.neutral.B40};
  ${({ theme }) => theme.typography["small1-1"]}
`;

const AmountText = styled.div<{ isPositive: boolean }>`
  color: ${({ theme, isPositive }) =>
    isPositive ? theme.color.secondary.S60 : theme.color.neutral.B60};
  ${({ theme }) => theme.typography["body2-1"]}
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem 1.5rem 2rem;
  background-color: ${({ theme }) => theme.color.neutral.white};
  box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.05);
`;

const ActionButton = styled.button<{ primary?: boolean }>`
  flex: 1;
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  ${({ theme }) => theme.typography["body1-2"]}
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  ${({ theme, primary }) =>
    primary
      ? `
    background-color: ${theme.color.neutral.B60};
    color: ${theme.color.neutral.white};
    
    &:hover {
      background-color: ${theme.color.neutral.B70};
    }
  `
      : `
    background-color: ${theme.color.neutral.B10};
    color: ${theme.color.neutral.B60};
    
    &:hover {
      background-color: ${theme.color.neutral.B20};
    }
  `}
`;
