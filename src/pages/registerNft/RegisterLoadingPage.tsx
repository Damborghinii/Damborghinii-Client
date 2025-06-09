import styled from "@emotion/styled";
import { registerNftIcons } from "../../assets/icons";
import theme from "../../styles/theme";

const RegisterLoadingPage = () => {
  const { register_loading: RegisterLoading } = registerNftIcons;
  return (
    <PageContainer>
      <IconWrapper>
        <RegisterLoading />
      </IconWrapper>

      <TextWrapper>
        <MainText>NFT 가치평가를 진행중입니다</MainText>
        <SubText>1분 가량의 시간이 소요됩니다</SubText>
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
