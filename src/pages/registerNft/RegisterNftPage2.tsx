import styled from "@emotion/styled";
import StepIndicator from "../../components/stepIndicator/StepIndicator";
import theme from "../../styles/theme";
import { useNftForm } from "../../contexts/NftFormContext";
import { isFormFilled } from "../../utils/isFormFilled";
import { MultiInputSection } from "../../components/common/input/MultiInputSection";
import Button from "../../components/common/button/Button";
import { useNavigate } from "react-router-dom";

const RegisterNftPage2 = () => {
  const { formData, updateForm } = useNftForm();
  const navigate = useNavigate();
  const handleNext = () => {
    if (
      isFormFilled(formData, [
        "title",
        "singers",
        "composers",
        "lyricists",
        "streamingUrls",
      ])
    ) {
      navigate("/nft/register/music-extra");
    }
  };
  return (
    <PageContainer>
      <ContentWrapper>
        <ProgressIndicator>
          <StepIndicator currentStep={1} />
        </ProgressIndicator>
        <Title>음원 기본 정보 입력</Title>
        <InputSection>
          <InputGroup>
            <InputTitle>음원/앨범명</InputTitle>
            <Input
              placeholder="음원/앨범명을 입력해 주세요"
              value={formData.title}
              onChange={(e) => updateForm({ title: e.target.value })}
            />
          </InputGroup>

          <MultiInputSection
            title="가수 정보"
            placeholder="참여한 가수를 입력해 주세요"
            values={formData.singers}
            buttonText="가수 추가"
            onChange={(idx, value) => {
              const updated = [...formData.singers];
              updated[idx] = value;
              updateForm({ singers: updated });
            }}
            onAdd={() => updateForm({ singers: [...formData.singers, ""] })}
            onRemove={(idx) =>
              updateForm({
                singers: formData.singers.filter((_, i) => i !== idx),
              })
            }
          />

          <MultiInputSection
            title="작곡가 정보"
            placeholder="참여한 작곡가를 입력해 주세요"
            values={formData.composers}
            buttonText="작곡가 추가"
            onChange={(idx, value) => {
              const updated = [...formData.composers];
              updated[idx] = value;
              updateForm({ composers: updated });
            }}
            onAdd={() => updateForm({ composers: [...formData.composers, ""] })}
            onRemove={(idx) =>
              updateForm({
                composers: formData.composers.filter((_, i) => i !== idx),
              })
            }
          />

          <MultiInputSection
            title="작사가 정보"
            placeholder="참여한 작사가를 입력해 주세요"
            values={formData.lyricists}
            buttonText="작사가 추가"
            onChange={(idx, value) => {
              const updated = [...formData.lyricists];
              updated[idx] = value;
              updateForm({ lyricists: updated });
            }}
            onAdd={() => updateForm({ lyricists: [...formData.lyricists, ""] })}
            onRemove={(idx) =>
              updateForm({
                lyricists: formData.lyricists.filter((_, i) => i !== idx),
              })
            }
          />

          <MultiInputSection
            title="음원 스트리밍 URL"
            placeholder="음원이 스트리밍되고 있는 URL을 입력해 주세요"
            values={formData.streamingUrls}
            buttonText="URL 추가"
            onChange={(idx, value) => {
              const updated = [...formData.streamingUrls];
              updated[idx] = value;
              updateForm({ streamingUrls: updated });
            }}
            onAdd={() =>
              updateForm({ streamingUrls: [...formData.streamingUrls, ""] })
            }
            onRemove={(idx) =>
              updateForm({
                streamingUrls: formData.streamingUrls.filter(
                  (_, i) => i !== idx
                ),
              })
            }
          />
        </InputSection>
      </ContentWrapper>
      <Button
        children="다음"
        size="big"
        fullWidth
        disabled={
          !isFormFilled(formData, [
            "title",
            "singers",
            "composers",
            "lyricists",
            "streamingUrls",
          ])
        }
        onClick={handleNext}
      />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  padding: 32px 26px 24px 26px;
  overflow-y: auto;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28.8px;
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
  margin-right: 8px;
`;

const Input = styled.input`
  flex: 1;
  width: 100%;
  padding: 8px 3.5px;
  font-size: ${theme.typography["body1-2"].fontSize};
  font-weight: ${theme.typography["body1-2"].fontWeight};
  color: ${theme.color.neutral.B40};
  border: none;
  border-bottom: 1px solid ${theme.color.neutral.B20};
  outline: none;

  &::placeholder {
    color: ${theme.color.neutral.B20};
  }
`;

export default RegisterNftPage2;
