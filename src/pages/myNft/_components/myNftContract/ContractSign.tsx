import styled from "@emotion/styled";
import theme from "@styles/theme";
import SignContainer from "./SignContainer";

export const ContractSign = () => {
  return (
    <PageContainer>
      <Title>본 계약에 동의하며 이에 서명합니다.</Title>
      <InfoGroup>
        <InfoWrapper>
          <InfoTitle>작성일</InfoTitle>
          <InfoValue>2025년 08 14</InfoValue>
        </InfoWrapper>
        <InfoWrapper>
          <InfoTitle>차입자(대출신청인)</InfoTitle>
          <InputSection placeholder="성명을 입력해주세요." />
        </InfoWrapper>
      </InfoGroup>
      <SignContainer />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 26px;
`;

const Title = styled.div`
  font-size: ${theme.typography["body1-2"].fontSize};
  font-weight: ${theme.typography["body1-2"].fontWeight};
  color: ${theme.color.neutral.B70};
  margin-bottom: 24px;
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const InfoTitle = styled.div`
  flex: 0 0 100px;
  font-size: ${theme.typography["small1-3"].fontSize};
  font-weight: ${theme.typography["small1-3"].fontWeight};
  color: ${theme.color.neutral.B50};
`;

const InfoValue = styled.div`
  font-size: ${theme.typography["small1-3"].fontSize};
  font-weight: ${theme.typography["small1-3"].fontWeight};
  color: ${theme.color.neutral.B70};
`;

const InputSection = styled.input`
  font-size: ${theme.typography["small1-3"].fontSize};
  font-weight: ${theme.typography["small1-3"].fontWeight};
  width: 100%;
  padding: 4px;
  border: none;
  border-bottom: 1px solid ${theme.color.neutral.B20};
  outline: none;
  color: ${theme.color.neutral.B70};
  &::placeholder {
    color: ${theme.color.neutral.B30};
  }
`;
