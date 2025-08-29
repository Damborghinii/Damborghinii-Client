import styled from "@emotion/styled";
import theme from "@styles/theme";

const ContractPartySection = () => {
  return (
    <PageContainer>
      <Title>제1조(계약 당사자)</Title>
      <SubTitle>1. 차입자(대출 신청인)</SubTitle>
      <InputGroup>
        <InputWrapper>
          <InputTitle>성명</InputTitle>
          <InputSection placeholder="성명을 입력해주세요." />
        </InputWrapper>
        <InputWrapper>
          <InputTitle>연락처</InputTitle>
          <InputSection placeholder="연락처를 입력해주세요." />
        </InputWrapper>
      </InputGroup>
      <SubTitle>2. 투자자</SubTitle>
      <Explaination>복수의 투자자 기재 예정</Explaination>
    </PageContainer>
  );
};

export default ContractPartySection;

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

const SubTitle = styled.div`
  font-size: ${theme.typography["small1-3"].fontSize};
  font-weight: ${theme.typography["small1-3"].fontWeight};
  color: ${theme.color.neutral.B70};
  margin-bottom: 8px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

const InputTitle = styled.div`
  font-size: ${theme.typography["small1-3"].fontSize};
  font-weight: ${theme.typography["small1-3"].fontWeight};
  width: 100px;
  color: ${theme.color.neutral.B50};
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

const Explaination = styled.div`
  font-size: ${theme.typography["small1-2"].fontSize};
  font-weight: ${theme.typography["small1-2"].fontWeight};
  color: ${theme.color.neutral.B70};
`;
