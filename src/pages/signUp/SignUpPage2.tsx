import React from "react";
import styled from "@emotion/styled";
import theme from "@styles/theme";
import StepIndicator from "@components/stepIndicator/StepIndicator";

const SignUpPage2 = () => {
  return (
    <PageContainer>
      <ContentWrapper>
        <ProgressIndicator>
          <StepIndicator currentStep={2} />
        </ProgressIndicator>
      </ContentWrapper>
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
