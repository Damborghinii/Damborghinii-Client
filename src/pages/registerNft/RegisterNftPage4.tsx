import styled from "@emotion/styled";
import StepIndicator from "../../components/stepIndicator/StepIndicator";
import theme from "../../styles/theme";
import { registerNftIcons } from "../../assets/icons";
import Button from "../../components/common/button/Button";
import { useRef } from "react";
import { useNftForm } from "../../contexts/NftFormContext";
import { isFormFilled } from "../../utils/isFormFilled";
import { useNavigate } from "react-router-dom";

const IMAGE_UPLOAD_TEXT = "이미지 업로드";

const RegisterNftPage4 = () => {
  const { formData, updateForm } = useNftForm();
  const navigate = useNavigate();
  const handleNext = () => {
    if (isFormFilled(formData, ["image"])) {
      navigate("/nft/register/image-crop");
    }
  };
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { image: Image } = registerNftIcons;

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      updateForm({ image: file });
    }
  };

  return (
    <PageContainer>
      <ContentWrapper>
        <ProgressIndicator>
          <StepIndicator currentStep={4} />
        </ProgressIndicator>
        <Title>대표 이미지 업로드</Title>
        <InputSection>
          <InputGroup>
            <InputTitle>대표 이미지</InputTitle>
            <ImageWrapper>
              <ImageButtonWrapper onClick={handleUploadClick}>
                <Image />
                <span>{IMAGE_UPLOAD_TEXT}</span>
              </ImageButtonWrapper>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept=".jpeg,.jpg,.png"
                onChange={handleFileChange}
              />
            </ImageWrapper>
          </InputGroup>
        </InputSection>
      </ContentWrapper>
      <Button
        children="다음"
        fullWidth
        size="big"
        onClick={handleNext}
        disabled={!isFormFilled(formData, ["image"])}
      />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 48.8px);
  padding: 32px 26px 24px 26px;
  overflow-y: auto;
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

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 9px;
  aspect-ratio: 1 / 1;
  border: 1px solid ${theme.color.neutral.B20};
  border-radius: 8px;
`;

const ImageButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  > span {
    font-size: ${theme.typography["body2-2"].fontSize};
    font-weight: ${theme.typography["body2-2"].fontSize};
    color: ${theme.color.neutral.B60};
  }
`;

export default RegisterNftPage4;
