import Button from "@components/common/button/Button";
import { SingleInputSection } from "@components/common/input/SingleInputSection";
import styled from "@emotion/styled";
import useLogin from "@hooks/queries/useLogin";
import theme from "@styles/theme";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogoIcons } from "@assets/icons";

const LoginPage = () => {
  const [loginId, setLoginId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { logo: Logo } = LogoIcons;

  const { mutate: loginMutate } = useLogin();
  const [isError, setIsError] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    loginMutate(
      { loginId, password },
      {
        onSuccess: (response) => {
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("refreshToken", response.data.refreshToken);
          navigate("/main");
        },
        onError: (error) => {
          setIsError(true);
          console.log("로그인 실패: ", error);
        },
      }
    );
  };
  const handleClickSignUp = () => {
    navigate("/signup/basic");
  };
  return (
    <PageContainer>
      <LogoSection>
        <Logo />
        <LogoTitle>Damborghinii</LogoTitle>
      </LogoSection>
      <InputSection>
        <SingleInputSection
          placeholder="아이디를 입력해주세요"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />
        <SingleInputSection
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </InputSection>
      {isError && (
        <ExplainationWrapper>
          <Explaination>아이디 혹은 비밀번호를 다시 확인해주세요.</Explaination>
        </ExplainationWrapper>
      )}
      <ButtonSection>
        <Button children="로그인" fullWidth size="big" onClick={handleLogin} />
        <Button
          children="회원가입"
          fullWidth
          variant="line-secondary"
          size="big"
          onClick={handleClickSignUp}
        />
      </ButtonSection>
    </PageContainer>
  );
};

export default LoginPage;

const PageContainer = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 540px;
  height: 100vh;
  background-color: ${theme.color.neutral.white};
  padding: 0 22px 0 22px;
  overflow-y: hidden;
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  gap: 8px;
`;

const LogoTitle = styled.h2`
  font-size: 30px;
  font-weight: 900;
  color: ${theme.color.primary.P60};
`;

const InputSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 14px;
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

const ExplainationWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: baseline;
`;
const Explaination = styled.label`
  font-size: ${theme.typography["small1-3"].fontSize};
  font-weight: ${theme.typography["small1-3"].fontWeight};
  color: ${theme.color.warning.R30};
  margin-bottom: 36px;
`;
