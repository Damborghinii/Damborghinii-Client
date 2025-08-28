import styled from "@emotion/styled";
import theme from "@styles/theme";
import React from "react";

type InfoField = {
  label: string;
  value: string;
};

const fields: InfoField[] = [
  { label: "대출 방식", value: "value" },
  { label: "대출 금액", value: "value" },
  { label: "대출 기간", value: "value" },
  { label: "연이율", value: "value" },
  { label: "월 이자", value: "value" },
  { label: "연체이율", value: "value" },
];

const ContractCondition = () => {
  return (
    <PageContainer>
      <Title>제3조 (대출조건)</Title>
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

export default ContractCondition;

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
