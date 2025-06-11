import StepIndicator from "../../components/stepIndicator/StepIndicator";
import { useNftForm } from "../../contexts/NftFormContext";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Button from "../../components/common/button/Button";
import { isFormFilled } from "../../utils/isFormFilled";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { registerNftIcons } from "@assets/icons";

const RegisterNftPage3 = () => {
  const { file: File } = registerNftIcons;

  const { formData, updateForm } = useNftForm();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const handleNext = () => {
    if (isFormFilled(formData, ["copyrightRegistered"])) {
      navigate("/nft/register/image-upload");
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      updateForm({ copyrightFile: file });
    }
  };
  return (
    <PageContainer>
      <ContentWrapper>
        <ProgressIndicator>
          <StepIndicator currentStep={3} />
        </ProgressIndicator>
        <Title>음원 추가 정보 입력</Title>
        <InputSection>
          <InputGroup>
            <InputTitle>저작권 등록 여부</InputTitle>
            <RadioGroup>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  name="copyright"
                  value="yes"
                  checked={formData.copyrightRegistered === true}
                  onChange={() => updateForm({ copyrightRegistered: true })}
                />
                예
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  name="copyright"
                  value="no"
                  checked={formData.copyrightRegistered === false}
                  onChange={() =>
                    updateForm({
                      copyrightRegistered: false,
                      copyrightFile: null,
                    })
                  }
                />
                아니오
              </RadioLabel>
            </RadioGroup>
          </InputGroup>
          <InputGroup>
            <InputTitle>저작권 등록증</InputTitle>
            {formData.copyrightFile && (
              <FileContainer>
                <FiteContent>
                  <FileName>{formData.copyrightFile.name}</FileName>
                  <FileSize>
                    {(
                      (formData.copyrightFile.size as number) /
                      (1024 * 1024)
                    ).toFixed(2)}{" "}
                    MB
                  </FileSize>
                </FiteContent>
                <File />
              </FileContainer>
            )}
            <Button
              children="파일 업로드"
              size="medium"
              variant="line-primary"
              onClick={handleUploadClick}
              disabled={formData.copyrightRegistered !== true}
            />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept=".pdf,.jpg,.png"
              onChange={handleFileChange}
            />
          </InputGroup>
        </InputSection>
      </ContentWrapper>
      <Button
        children="다음"
        size="big"
        fullWidth
        onClick={handleNext}
        disabled={
          !isFormFilled(formData, ["copyrightRegistered"]) ||
          (formData.copyrightRegistered === true && !formData.copyrightFile)
        }
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

const RadioGroup = styled.div`
  display: flex;
  gap: 16px;
`;

const RadioLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: ${theme.typography["body2-2"].fontSize};
  font-weight: ${theme.typography["body2-2"].fontWeight};
  color: ${theme.color.neutral.B70};
`;

const RadioInput = styled.input`
  vertical-align: middle;
  margin: 0;
  accent-color: ${theme.color.neutral.B60};
  cursor: pointer;
`;

const FileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 230px;
  background-color: ${theme.color.neutral.B00};
  border: 1px solid ${theme.color.neutral.B30};
  border-radius: 4px;
  color: ${theme.color.neutral.B60};
  padding: 8px 16px;
  margin-bottom: 16px;
`;

const FiteContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 150px;
  gap: 2px;
`;

const FileName = styled.span`
  font-size: ${theme.typography["small1-2"].fontSize};
  font-weight: ${theme.typography["small1-2"].fontWeight};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FileSize = styled.span`
  font-size: ${theme.typography["small2-3"].fontSize};
  font-weight: ${theme.typography["small2-3"].fontWeight};
`;

export default RegisterNftPage3;
