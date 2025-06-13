import Button from "@components/common/button/Button";
import { SingleInputSection } from "@components/common/input/SingleInputSection";
import styled from "@emotion/styled";
import theme from "@styles/theme";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleClickSignUp = () => {
    navigate("/signup/basic");
  };
  return (
    <PageContainer>
      <Title>담보르기니</Title>
      <InputSection>
        <SingleInputSection placeholder="아이디를 입력해주세요" />
        <SingleInputSection placeholder="비밀번호를 입력해주세요" />
      </InputSection>
      <ButtonSection>
        <Button children="로그인" fullWidth variant="secondary" size="big" />
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${theme.color.neutral.white};
  padding: 0 22px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 50px;
`;

const InputSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 30px;
  margin-bottom: 50px;
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;
