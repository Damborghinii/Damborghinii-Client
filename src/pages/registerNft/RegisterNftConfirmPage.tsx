import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";

const RegisterNftConfirmPage = () => {
  return (
    <PageContainer>
      <ContentWrapper>
        <Title>뭐시기 ・ 음원 NFT</Title>
        <ImageWrapper></ImageWrapper>
        <PriceWrapper>
          <ETHPrice>최종 가치:</ETHPrice>
          <KRWPrice>한화 가치:</KRWPrice>
        </PriceWrapper>
        <InfoWrapper>
          <DetailTItleWrapper>
            <DetailTitle>상세 정보</DetailTitle>
          </DetailTItleWrapper>
          <InfoTable>
            <TableRow>
              <Label>음원/앨범명</Label>
              <Value>Dissolve</Value>
            </TableRow>
            <TableRow>
              <Label>가수 정보</Label>
              <Value>Dissolve</Value>
            </TableRow>
            <TableRow>
              <Label>작곡가 정보</Label>
              <Value>Dissolve</Value>
            </TableRow>
            <TableRow>
              <Label>작사가 정보</Label>
              <Value>Dissolve</Value>
            </TableRow>
          </InfoTable>
        </InfoWrapper>
      </ContentWrapper>
    </PageContainer>
  );
};

export default RegisterNftConfirmPage;

const PageContainer = styled.div`
  width: 100%;
  padding: 40px 37px 24px 37px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: ${theme.typography["title1-2"].fontSize};
  font-weight: ${theme.typography["title1-2"].fontWeight};
  margin-bottom: 30px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1;
  padding: 8px;
  border: 1px solid ${theme.color.neutral.B20};
  border-radius: 8px;
  margin-bottom: 20px;
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  border-radius: 4px;
  background-color: ${theme.color.primary.P10};
  margin-bottom: 30px;
`;

const ETHPrice = styled.span`
  font-size: ${theme.typography["body1-2"].fontSize};
  font-weight: ${theme.typography["body1-2"].fontWeight};
  color: ${theme.color.neutral.B60};
`;

const KRWPrice = styled.span`
  font-size: ${theme.typography["small1-3"].fontSize};
  font-weight: ${theme.typography["small1-3"].fontWeight};
  color: ${theme.color.neutral.B60};
`;

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const DetailTItleWrapper = styled.div`
  width: 100%;
  padding: 0 10px;
`;

const DetailTitle = styled.h2`
  font-size: ${theme.typography["small1-2"].fontSize};
  font-weight: ${theme.typography["small1-2"].fontWeight};
  color: ${theme.color.neutral.B60};
  margin-bottom: 14px;
`;

const InfoTable = styled.div`
  width: 100%;
  border: 1px solid ${theme.color.neutral.B20};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 1px solid ${theme.color.neutral.B20};
  &:first-of-type {
    border-top: none;
  }
`;

const Label = styled.span`
  font-size: ${theme.typography["small2-3"].fontSize};
  font-weight: ${theme.typography["small2-3"].fontWeight};
  color: ${theme.color.neutral.B60};
  padding: 12px 10px;
`;

const Value = styled.span`
  font-size: ${theme.typography["small2-2"].fontSize};
  font-weight: ${theme.typography["small2-2"].fontWeight};
  color: ${theme.color.neutral.B70};
  padding: 12px 10px;
`;
