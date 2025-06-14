import { signUpIcons } from "@assets/icons";
import Button from "@components/common/button/Button";
import styled from "@emotion/styled";
import theme from "@styles/theme";
import React from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage4 = () => {
  const { signup_complete: SignUpComplete } = signUpIcons;
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/investment");
  };
  return (
    <PageContainer>
      <ContentWrapper>
        <Comment>회원가입이 완료되었습니다!</Comment>
        <SignUpComplete />
      </ContentWrapper>
      <Button
        children="홈으로 이동"
        variant="secondary"
        size="big"
        fullWidth
        onClick={handleNext}
      />
    </PageContainer>
  );
};

export default SignUpPage4;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: calc(100vh - 48.8px);
  padding: 154px 28px 24px 28px;
  overflow-y: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Comment = styled.h2`
  font-size: ${theme.typography["title1-2"].fontSize};
  font-weight: ${theme.typography["title1-2"].fontWeight};
  color: ${theme.color.neutral.black};
  margin-bottom: 45px;
`;
