import styled from "@emotion/styled";
import theme from "@styles/theme";

type InfoField = {
  label: string;
  value: string;
};

const fields: InfoField[] = [
  { label: "NFT 명", value: "value" },
  { label: "아티스트", value: "value" },
  { label: "저작권 등록 여부", value: "value" },
  { label: "저작권 등록증", value: "value" },
  { label: "음원 예상 수익", value: "value" },
  { label: "음원 스트리밍 URL", value: "value" },
];

const ContractNftInfoSection = () => {
  return (
    <PageContainer>
      <Title>제2조 (대출 대상 NFT)</Title>
      <InfoGroup>
        {fields.map((field, idx) => (
          <InfoWrapper key={idx}>
            <InfoTitle>{field.label}</InfoTitle>
            <InfoValue>{field.value}</InfoValue>
          </InfoWrapper>
        ))}
      </InfoGroup>
    </PageContainer>
  );
};

export default ContractNftInfoSection;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 26px;
`;

const Title = styled.div`
  font-size: ${theme.typography["body1-2"].fontSize};
  font-weight: ${theme.typography["body1-2"].fontWeight};
  color: ${theme.color.neutral.B70};
  margin-bottom: 24px;
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const InfoTitle = styled.div`
  width: 100px;
  font-size: ${theme.typography["small1-3"].fontSize};
  font-weight: ${theme.typography["small1-3"].fontWeight};
  color: ${theme.color.neutral.B50};
`;

const InfoValue = styled.div`
  font-size: ${theme.typography["small1-3"].fontSize};
  font-weight: ${theme.typography["small1-3"].fontWeight};
  color: ${theme.color.neutral.B70};
`;
