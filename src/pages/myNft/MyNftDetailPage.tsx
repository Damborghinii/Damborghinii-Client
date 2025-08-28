import { registerNftIcons } from "@assets/icons";
import Button from "@components/common/button/Button";
import styled from "@emotion/styled";
import theme from "@styles/theme";
import React, { useState } from "react";
import { NoticeSection } from "./_components/NoticeSection";
// import { LoanCondition } from "@apis/loan";

const InfoRow = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <TableRow>
    <Label>{label}</Label>
    <Value>{children}</Value>
  </TableRow>
);

const MyNftDetailPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIconClick = () => {
    setIsOpen((prev) => !prev);
  };

  const { arrow_up: ArrowUp, arrow_down: ArrowDown } = registerNftIcons;

  // const [condition, setCondition] = useState<LoanCondition>({
  //   loanType: "",
  //   loanPeriod: "",
  //   loanAmount: "",
  //   interestRate: "",
  //   overdueRate: "",
  // });

  return (
    <PageWrapper>
      <NftInfoWrapper>
        <NftPicture src="/logo.svg" />
        <TextWrapper>
          <Title>음원 제목</Title>
          <Singers>가수들</Singers>
        </TextWrapper>
        <InfoWrapper>
          <DetailTable>
            <DetailTitleWrapper onClick={handleIconClick}>
              <DetailTitle>상세 정보</DetailTitle>
              {isOpen ? <ArrowUp /> : <ArrowDown />}
            </DetailTitleWrapper>
          </DetailTable>
          {isOpen && (
            <>
              <InfoTable>
                <InfoRow label="음원/앨범명">음원명이시고</InfoRow>
                <InfoRow label="가수 정보">가수시고</InfoRow>
                <InfoRow label="작곡가 정보">작곡가시고</InfoRow>
                <InfoRow label="작사가 정보">작사가시고</InfoRow>
              </InfoTable>
              <InfoTable>
                <InfoRow label="저작권 등록 여부">
                  "저작권이 등록되어 있는 음원"
                </InfoRow>
                <InfoRow label="저작권 등록증">등록된 파일 없음</InfoRow>
                <InfoRow label="mp3 파일">mp3 파일 없음</InfoRow>
                <InfoRow label="음원 예상 수익">100원</InfoRow>
              </InfoTable>
              <InfoTable>
                <TableRow>
                  <Label>음원 스트리밍 URL</Label>
                </TableRow>
                <TableRow>
                  <UrlText>
                    <span>url들</span>
                  </UrlText>
                </TableRow>
              </InfoTable>
            </>
          )}
        </InfoWrapper>
        <PriceWrapper>
          <ETHPrice>최종 가치: 100</ETHPrice>
          <KRWPrice>한화 가치 약 100</KRWPrice>
        </PriceWrapper>
        <Button
          size="big"
          variant="line-primary"
          fullWidth
          children="가치 재평가"
        />
      </NftInfoWrapper>
      <NoticeSection isFullScreen />
    </PageWrapper>
  );
};

export default MyNftDetailPage;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const NftInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 26px;
`;

const NftPicture = styled.img`
  width: 156px;
  height: 156px;
  border-radius: 8px;
  margin-bottom: 30px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 4px;
  padding: 0 3px;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  font-size: ${theme.typography["title1-1"].fontSize};
  font-weight: ${theme.typography["title1-1"].fontWeight};
  color: ${theme.color.neutral.B60};
`;

const Singers = styled.h2`
  font-size: ${theme.typography["body2-2"].fontSize};
  font-weight: ${theme.typography["body2-2"].fontWeight};
  color: ${theme.color.neutral.B30};
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
  gap: 8px;
  display: flex;
  flex-direction: row;
  > span {
    font-size: ${theme.typography["small2-2"].fontSize};
    font-weight: ${theme.typography["small2-2"].fontWeight};
    color: ${theme.color.neutral.B70};
  }
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

const PriceWrapper = styled.div`
  width: 100%;
  border: 1px solid ${theme.color.neutral.B20};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  gap: 6px;
  padding: 10px;
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
  padding: 0 3px;
`;

const DetailTable = styled.div`
  width: 100%;
  border: 1px solid ${theme.color.neutral.B20};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  padding: 10px;
`;

const DetailTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const DetailTitle = styled.h2`
  font-size: ${theme.typography["small1-2"].fontSize};
  font-weight: ${theme.typography["small1-2"].fontWeight};
  color: ${theme.color.neutral.B60};
`;

const InfoTable = styled.div`
  width: 100%;
  border: 1px solid ${theme.color.neutral.B20};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

const UrlText = styled.span`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 10px;
  > span {
    color: ${theme.color.neutral.B70};
    font-size: ${theme.typography["small2-2"].fontSize};
    font-weight: ${theme.typography["small2-2"].fontWeight};
  }
`;
