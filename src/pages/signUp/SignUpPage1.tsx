import Button from "@components/common/button/Button";
import { SingleInputSection } from "@components/common/input/SingleInputSection";
import StepIndicator from "@components/stepIndicator/StepIndicator";
import styled from "@emotion/styled";
import useCheckDuplicateId from "@hooks/queries/useCheckDuplicatedId";
import theme from "@styles/theme";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignUpForm } from "src/contexts/SignUpFormContext";
import { isFormFilled } from "src/utils/isFormFilled";

const SignUpPage1 = () => {
  const { updateForm, formData } = useSignUpForm();
  const navigate = useNavigate();

  const [idMessage, setIdMessage] =
    useState<string>("12자 이하/영문,숫자 포함");
  const [loginId, setLoginId] = useState<string>("");
  const [isLoginIdValid, setIsLoginIdValid] = useState<boolean>(true);

  const [password, setPassword] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);

  const [pwdCheck, setPwdCheck] = useState<string>("");

  const [isIdChecked, setIsIdChecked] = useState<boolean>(false);

  const idRegex = /^(?=.*[a-z])(?=.*[0-9])[a-z0-9]{1,12}$/;
  const pwdRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9])[^\s]{1,20}$/;

  const handleIdChange = (value: string) => {
    setLoginId(value);
    setIsLoginIdValid(value === "" || idRegex.test(value));
    setIdMessage("12자 이하/영문,숫자 포함");
  };

  const handlePwdChange = (value: string) => {
    setPassword(value);
    const isValid = value === "" || pwdRegex.test(value);
    setIsPasswordValid(isValid);
    if (isValid) {
      updateForm({ password: value });
    }
  };

  const handlePwdCheck = (value: string) => {
    setPwdCheck(value);
  };

  const isPasswordMatched = password.length > 0 && password === pwdCheck;

  const { mutate: checkId } = useCheckDuplicateId();

  const handleCheckDuplicate = async () => {
    if (!loginId || !isLoginIdValid) return;
    checkId(loginId, {
      onSuccess: (response) => {
        if (response.success) {
          setIdMessage("사용 가능한 아이디입니다.");
          setIsLoginIdValid(true);
          setIsIdChecked(true);
          updateForm({ loginId: loginId });
        } else {
          setIdMessage("중복된 아이디입니다.");
          setIsLoginIdValid(false);
        }
      },
      onError: (error) => {
        console.error("중복 확인 에러: ", error);
        setIsLoginIdValid(false);
      },
    });
  };

  const isNextButtonEnabled =
    isFormFilled(formData, ["loginId", "password"]) &&
    password === pwdCheck &&
    isIdChecked;

  const handleNext = () => {
    navigate("/signup/extra");
  };

  return (
    <PageContainer>
      <ContentWrapper>
        <ProgressIndicator>
          <StepIndicator currentStep={1} />
        </ProgressIndicator>
        <Title>기본정보 입력</Title>
        <InputSection>
          <InputGroup>
            <InputTitle>아이디</InputTitle>
            <InputWrapper>
              <SingleInputSection
                placeholder="아이디를 입력해주세요."
                value={loginId}
                onChange={(e) => handleIdChange(e.target.value)}
              />
              <Button
                children="중복확인"
                variant="line-secondary"
                size="small"
                onClick={handleCheckDuplicate}
              />
            </InputWrapper>
            <Explaination isValid={isLoginIdValid}>{idMessage}</Explaination>
          </InputGroup>
          <InputGroup>
            <InputTitle>비밀번호</InputTitle>
            <InputWrapper>
              <SingleInputSection
                placeholder="비밀번호를 입력해 주세요."
                value={password}
                onChange={(e) => handlePwdChange(e.target.value)}
                type="password"
              />
            </InputWrapper>
            <InputWrapper>
              <SingleInputSection
                placeholder="비밀번호 확인"
                value={pwdCheck}
                onChange={(e) => handlePwdCheck(e.target.value)}
                isIcon={isPasswordMatched}
                type="password"
              />
            </InputWrapper>
            <Explaination isValid={isPasswordValid}>
              20자 이하/영문 대소문자,특수문자, 숫자 포함
            </Explaination>
          </InputGroup>
        </InputSection>
      </ContentWrapper>
      <Button
        children="다음"
        size="big"
        fullWidth
        disabled={!isNextButtonEnabled}
        onClick={handleNext}
      />
    </PageContainer>
  );
};

export default SignUpPage1;

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
