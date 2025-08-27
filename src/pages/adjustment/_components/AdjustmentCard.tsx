import styled from "@emotion/styled";
import { IcMoney } from "@assets/svg";
import { HorizontalDivider } from "@components/common/horizontalDivider/HorizontalDivider";
import theme from "@styles/theme";
import Button from "@components/common/button/Button";

export interface MoneyCardProps {
  balance: string;
  totalContracts: string;
  totalAmount: string;
  isReceivedType?: boolean;
  onClick?: () => void;
}

export const AdjustmentCard = ({
  balance,
  totalContracts,
  totalAmount,
  isReceivedType = true,
  onClick = () => {},
}: MoneyCardProps) => {
  return (
    <Wrapper>
      <MoneySection>
        <MoneyTextSection>
          <IcMoney width={16} height={16} />
          보유금액 {balance}
        </MoneyTextSection>
        {!isReceivedType && (
          <Button size="small" onClick={onClick}>
            상환하기
          </Button>
        )}
      </MoneySection>
      <DescriptionSection>
        <ColumnTextSection>
          <Title>총 보유계약</Title>
          <Content>{totalContracts}건</Content>
        </ColumnTextSection>
        <HorizontalDivider
          height="2rem"
          width="0.1rem"
          color={theme.color.neutral.B20}
        />
        <ColumnTextSection>
          <Title>{isReceivedType ? "상환받을 금액" : "상환할 금액"}</Title>
          <Content>{totalAmount}원</Content>
        </ColumnTextSection>
      </DescriptionSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 1.5rem;
`;

const MoneySection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem 0;
`;

const MoneyTextSection = styled.div`
  display: flex;
  gap: 0.5rem;

  padding: 0 0.25rem;

  color: ${({ theme }) => theme.color.neutral.B60};
  ${({ theme }) => theme.typography["body2-2"]};
`;

const DescriptionSection = styled.div`
  width: 100%;
  padding: 0.75rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.color.neutral.B00};
`;

const ColumnTextSection = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

const Title = styled.h2`
  ${({ theme }) => theme.typography["small1-2"]}
  color: ${({ theme }) => theme.color.neutral.B60};
`;

const Content = styled.h1`
  ${({ theme }) => theme.typography["body1-1"]}
  color: ${({ theme }) => theme.color.neutral.B70};
`;
