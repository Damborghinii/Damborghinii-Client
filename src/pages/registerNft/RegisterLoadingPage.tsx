import styled from "@emotion/styled";
import { registerNftIcons } from "../../assets/icons";
import theme from "../../styles/theme";
import { useEffect } from "react";
import { useNftForm } from "src/contexts/NftFormContext";
import { useNavigate } from "react-router-dom";
import useCreateNft from "@hooks/queries/useCreateNft";

const RegisterLoadingPage = () => {
  const { register_loading: RegisterLoading } = registerNftIcons;
  const { mutate: createNftMutate } = useCreateNft();
  const nftForm = useNftForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (!nftForm.formData.croppedImage) {
      navigate("/nft/register/confirm");
      return;
    }

    if (!nftForm.formData.audio) {
      navigate("/nft/register/confirm");
      return;
    }

    createNftMutate(nftForm.formData, {
      onSuccess: (data) => {
        if (data.success) {
          nftForm.resetForm();
          navigate("/myNft");
        }
      },
      onError: (error) => {
        console.error("NFT 저장 실패:", error);
        nftForm.resetForm();
        navigate("/myNft");
      },
    });
  }, []);

  return (
    <PageContainer>
      <IconWrapper>
        <RegisterLoading />
      </IconWrapper>

      <TextWrapper>
        <MainText>NFT를 등록중 입니다</MainText>
        <SubText>30초 가량의 시간이 소요됩니다</SubText>
      </TextWrapper>
    </PageContainer>
  );
};

export default RegisterLoadingPage;

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
