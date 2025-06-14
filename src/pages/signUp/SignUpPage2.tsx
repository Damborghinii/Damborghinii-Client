import styled from "@emotion/styled";
import theme from "@styles/theme";
import StepIndicator from "@components/stepIndicator/StepIndicator";
import { SingleInputSection } from "@components/common/input/SingleInputSection";
import JobTypeButton from "@components/jobTypebutton/JobTypeButton";
import MaskedInputSection from "@components/common/input/MaskedInputSection";
import Button from "@components/common/button/Button";
import { useSignUpForm } from "src/contexts/SignUpFormContext";
import { isFormFilled } from "src/utils/isFormFilled";
import { useNavigate } from "react-router-dom";

const SignUpPage2 = () => {
  const { formData, updateForm } = useSignUpForm();
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/signup/nickname");
  };

  return (
    <PageContainer>
      <ContentWrapper>
        <ProgressIndicator>
          <StepIndicator currentStep={2} />
        </ProgressIndicator>
        <Title>부가정보 입력</Title>
        <InputSection>
          <InputGroup>
            <InputTitle>생년월일</InputTitle>
            <InputWrapper>
              <MaskedInputSection
                mask="____-__-__"
                placeholder="YYYY-MM-DD"
                value={formData.birth}
                onChange={(e) => updateForm({ birth: e.target.value })}
              />
            </InputWrapper>
          </InputGroup>
          <InputGroup>
            <InputTitle>전화번호</InputTitle>
            <InputWrapper>
              <MaskedInputSection
                mask="___-____-____"
                placeholder="010-XXXX-XXXX"
                value={formData.phoneNumber}
                onChange={(e) => updateForm({ phoneNumber: e.target.value })}
              />
            </InputWrapper>
          </InputGroup>
          <InputGroup>
            <InputTitle>직업</InputTitle>
            <JobTypeButton />
          </InputGroup>
          <InputGroup>
            <InputTitle>블록체인 지갑</InputTitle>
            <InputWrapper>
              <SingleInputSection
                placeholder="이더리움 주소를 입력해 주세요."
                value={formData.walletAddr}
                onChange={(e) => updateForm({ walletAddr: e.target.value })}
              />
            </InputWrapper>
          </InputGroup>
        </InputSection>
      </ContentWrapper>
      <Button
        children="다음"
        size="big"
        fullWidth
        onClick={handleNext}
        disabled={
          !isFormFilled(formData, ["birth", "phoneNumber", "job", "walletAddr"])
        }
      />
    </PageContainer>
  );
};

export default SignUpPage2;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 48.8px);
  padding: 32px 26px 24px 26px;
  overflow-y: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProgressIndicator = styled.div`
  margin-bottom: 32px;
`;

const Title = styled.div`
  font-size: ${theme.typography["title1-2"].fontSize};
  font-weight: ${theme.typography["title1-2"].fontWeight};
  margin-bottom: 32px;
  text-align: center;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 32px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputTitle = styled.label`
  font-size: ${theme.typography["body2-2"].fontSize};
  font-weight: ${theme.typography["body2-2"].fontWeight};
  color: ${theme.color.neutral.B40};
  margin-bottom: 8px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 8px;
  margin-bottom: 8px;
`;
