import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import StepIndicator from "@components/stepIndicator/StepIndicator";
import theme from "@styles/theme";
import { useSignUpForm } from "src/contexts/SignUpFormContext";
import { SingleInputSection } from "@components/common/input/SingleInputSection";
import Button from "@components/common/button/Button";
import { isFormFilled } from "src/utils/isFormFilled";
import { useNavigate } from "react-router-dom";
import useSignUp from "@hooks/queries/useSignUp";

const SignUpPage3 = () => {
  const { formData, updateForm } = useSignUpForm();
  const [isValid, setIsValid] = useState<boolean>(true);
  const navigate = useNavigate();

  const { mutate: signUpMutate } = useSignUp();

  const handleNext = () => {
    signUpMutate(formData, {
      onSuccess: (response) => {
        const { accessToken, refreshToken } = response.data;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        navigate("/signup/complete");
      },
      onError: (error) => {
        console.error("회원가입 실패", error);
      },
    });
  };

  useEffect(() => {
    const trimmed = formData.name.trim();
    if (trimmed === "") {
      setIsValid(true);
    } else {
      const isValidNickname = /^[a-zA-Z0-9가-힣]{1,10}$/.test(trimmed);
      setIsValid(isValidNickname);
    }
  }, [formData.name]);

  return (
    <PageContainer>
      <ContentWrapper>
        <ProgressIndicator>
          <StepIndicator currentStep={3} />
        </ProgressIndicator>
        <Title>이름 입력</Title>
        <InputSection>
          <InputGroup>
            <InputTitle>이름</InputTitle>
            <InputWrapper>
              <SingleInputSection
                placeholder="이름을 입력해 주세요."
                value={formData.name}
                onChange={(e) => updateForm({ name: e.target.value })}
              />
            </InputWrapper>
            <Explaination isValid={isValid}>10자 이내 문자 입력</Explaination>
          </InputGroup>
        </InputSection>
      </ContentWrapper>
      <Button
        children="회원가입"
        size="big"
        fullWidth
        disabled={!isFormFilled(formData, ["name"])}
        onClick={handleNext}
      />
    </PageContainer>
  );
};

export default SignUpPage3;

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

const Explaination = styled.label<{ isValid: boolean }>`
  font-size: ${theme.typography["small1-3"].fontSize};
  font-weight: ${theme.typography["small1-3"].fontWeight};
  color: ${({ isValid }) =>
    isValid ? theme.color.neutral.B30 : theme.color.warning.R30};
`;
