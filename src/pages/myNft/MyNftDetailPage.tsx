import { registerNftIcons } from "@assets/icons";
import Button from "@components/common/button/Button";
import styled from "@emotion/styled";
import theme from "@styles/theme";
import React, { useState } from "react";
import { NoticeSection } from "./_components/NoticeSection";
import { useNavigate, useParams } from "react-router-dom";
import { useMyNftDetail } from "@hooks/queries/useMyNftDetail";
import { useLoanInfo } from "@hooks/queries/useLoanInfo";

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
  const { copyrightId } = useParams<{ copyrightId: string }>();
  const id = Number(copyrightId);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data: nftDetailRes } = useMyNftDetail(id);
  const nftData = nftDetailRes?.data;

  const contractId = Number(nftData?.contractId);
  const { data: loanRes } = useLoanInfo(contractId);
  const loanData = loanRes?.data;

  const handleIconClick = () => {
    setIsOpen((prev) => !prev);
  };

  const navigate = useNavigate();

  const handleLoanApply = () => {
    if (!contractId) return;
    navigate(`/loan-info-input/${copyrightId}/${contractId}`);
  };

  console.log(loanData);

  const { arrow_up: ArrowUp, arrow_down: ArrowDown } = registerNftIcons;

  return (
    <PageWrapper>
      <NftInfoWrapper>
        <NftPictureWrapper src={nftData?.imageUrl} />
        <TextWrapper>
          <Title>{nftData?.title}</Title>
          <Singers>{nftData?.singers}</Singers>
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
                <InfoRow label="음원/앨범명">{nftData?.title}</InfoRow>
                <InfoRow label="가수 정보">{nftData?.singers}</InfoRow>
                <InfoRow label="작곡가 정보">{nftData?.composers}</InfoRow>
                <InfoRow label="작사가 정보">{nftData?.lyricists}</InfoRow>
              </InfoTable>
              <InfoTable>
                <InfoRow label="저작권 등록 여부">
                  {/* {nftData?.isRegisterd
                    ? nftData.isRegisterd
                    : "저작권이 등록되지 않은 음원"} */}
                  강남스타일.pdf
                </InfoRow>
                <InfoRow label="저작권 등록증">
                  {nftData?.isRegisterd
                    ? nftData?.registrationDoc
                    : "등록된 파일 없음"}
                </InfoRow>
                <InfoRow label="mp3 파일">강남스타일.mp3</InfoRow>
                <InfoRow label="음원 예상 수익">{nftData?.wonPrice}</InfoRow>
              </InfoTable>
              <InfoTable>
                <TableRow>
                  <Label>음원 스트리밍 URL</Label>
                </TableRow>
                <TableRow>
                  <UrlText>
                    <span>{nftData.streamingUrls}</span>
                  </UrlText>
                </TableRow>
              </InfoTable>
            </>
          )}
        </InfoWrapper>
        <PriceWrapper>
          <ETHPrice>최종 가치: {nftData?.ethPrice}</ETHPrice>
          <KRWPrice>한화 가치 약 {nftData?.wonPrice}</KRWPrice>
        </PriceWrapper>
        <Button
          size="big"
          variant="line-primary"
          fullWidth
          children="가치 재평가"
        />
      </NftInfoWrapper>
      <NoticeSection isFullScreen condition={loanData?.loanCondition} />
      <ButtonWrapper>
        <Button
          size="big"
          fullWidth
          children="대출 신청"
          onClick={handleLoanApply}
        />
      </ButtonWrapper>
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

const NftPictureWrapper = styled.img`
  width: 156px;
  height: 156px;
  border-radius: 8px;
  border: 1px solid ${theme.color.neutral.B00};
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

const ButtonWrapper = styled.div`
  width: 100%;
  padding: 0 1.875rem;
  margin-bottom: 40px;
`;
