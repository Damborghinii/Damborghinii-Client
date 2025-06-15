import styled from "@emotion/styled";
import { registerNftIcons } from "../../assets/icons";
import theme from "../../styles/theme";
import { useEffect } from "react";
import useEvaluateNftValue from "@hooks/queries/useEvaluateNftValue";
import { useNftForm } from "src/contexts/NftFormContext";
import { useNavigate } from "react-router-dom";

const EvaluateLoadingPage = () => {
  const { register_loading: RegisterLoading } = registerNftIcons;
  const { mutate: evaluateValue } = useEvaluateNftValue();
  const { formData, updateForm } = useNftForm();

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      evaluateValue(formData, {
        onSuccess: (data) => {
          updateForm({
            ethPrice: data.data.ethPrice,
            wonPrice: data.data.wonPrice,
          });
          navigate("/nft/register/confirm");
        },
        onError: (error) => {
          console.error("가치 평가 실패:", error);
          navigate("/nft/register/image-upload");
        },
      });
    }, 3000);
    return () => clearTimeout(timer);
  }, [evaluateValue, formData, navigate, updateForm]);
  return (
    <PageContainer>
      <IconWrapper>
        <RegisterLoading />
      </IconWrapper>

      <TextWrapper>
        <MainText>NFT 가치평가를 진행중입니다</MainText>
        <SubText>10초 가량의 시간이 소요됩니다</SubText>
      </TextWrapper>
    </PageContainer>
  );
};

export default EvaluateLoadingPage;

const PageContainer = styled.div`
  width: 100%;
  height: calc(100% - 48.8px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 63px;
  margin-top: 126.2px;
`;

const IconWrapper = styled.div`
  width: 264px;
  height: 264px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-style: none;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const MainText = styled.span`
  font-size: ${theme.typography["title1-2"].fontSize};
  font-weight: ${theme.typography["title1-2"].fontWeight};
  color: ${theme.color.neutral.black};
`;

const SubText = styled.span`
  font-size: ${theme.typography["body2-2"].fontSize};
  font-weight: ${theme.typography["body2-2"].fontWeight};
  color: ${theme.color.neutral.B40};
`;
