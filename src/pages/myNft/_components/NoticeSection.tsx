import styled from "@emotion/styled";
import Spacer from "@components/common/spacer/Spacer";
import { LoanCondition } from "@apis/loan";

interface Props {
  condition?: LoanCondition;
  hasButton?: boolean;
  isFullScreen?: boolean;
  onClick?: () => void;
}

interface WrapperProps {
  isFullScreen?: boolean;
}

export const NoticeSection = ({
  condition,
  isFullScreen = true,
  hasButton,
  onClick,
}: Props) => {
  return (
    <NoticeWrapper isFullScreen={isFullScreen}>
      <MainText>
        {hasButton ? (
          <>다음 조건으로 대출이 가능해요.</>
        ) : (
          <>다음 조건으로 대출받아요.</>
        )}
      </MainText>
      <TextRowWrapper>
        <MainTitleText>대출방식</MainTitleText>
        <div>
          <MainContentText>{condition?.loanType}</MainContentText>
          <Spacer height="0.5rem" />

          <SubContentText>
            매달 이자를 지불하고, 대출액을 한번에 갚아요.
          </SubContentText>
        </div>
      </TextRowWrapper>
      <TextRowWrapper>
        <MainTitleText>대출기간</MainTitleText>
        <MainContentText>{condition?.loanPeriod}</MainContentText>
      </TextRowWrapper>
      <TextRowWrapper>
        <MainTitleText>대출액</MainTitleText>
        <MainContentText>{condition?.loanAmount}</MainContentText>
      </TextRowWrapper>
      <TextRowWrapper>
        <MainTitleText>연이율</MainTitleText>
        <div>
          <MainContentText>{condition?.interestRate}</MainContentText>
          <Spacer height="0.5rem" />
          <SubContentText>
            대출액x0.3%0.12을 매달 월 이자로 지불해요.
          </SubContentText>
        </div>
      </TextRowWrapper>
      <TextRowWrapper>
        <MainTitleText>연체율</MainTitleText>
        <div>
          <MainContentText>{condition?.overdueRate}</MainContentText>
          <Spacer height="0.5rem" />
          <SubContentText>
            이자, 원금 연체 시, 미수금 월 이자, 원금 단위로 상환해야 하는 금액의
            5%를 연체금으로 추가 지불해요.
          </SubContentText>
        </div>
      </TextRowWrapper>
      {hasButton && <Button onClick={onClick}>희망 정보 입력</Button>}
    </NoticeWrapper>
  );
};

const NoticeWrapper = styled.div<WrapperProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 1.875rem;
  gap: 2rem;
  background-color: ${({ theme }) => theme.color.neutral.B00};
  flex-grow: ${({ isFullScreen }) => (isFullScreen ? 1 : 0)};
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

const MainText = styled.h1`
  ${({ theme }) => theme.typography["body1-1"]}
  color: ${({ theme }) => theme.color.neutral.B60};
`;

const MainTitleText = styled.h2`
  min-width: 3rem;
  ${({ theme }) => theme.typography["small1-3"]}
  color: ${({ theme }) => theme.color.neutral.B40};
`;

const MainContentText = styled.h2`
  ${({ theme }) => theme.typography["body2-2"]}
  color: ${({ theme }) => theme.color.neutral.B70};
`;

const SubContentText = styled.h3`
  ${({ theme }) => theme.typography["small2-3"]}
  color: ${({ theme }) => theme.color.neutral.B40};
`;

const TextRowWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1.25rem;
`;
