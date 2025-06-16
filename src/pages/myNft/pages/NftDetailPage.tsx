import styled from "@emotion/styled";
import theme from "@styles/theme";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchNftDetail } from "@apis/nft";
import SvgIcDownload from "@assets/svg/IcDownload";

type NftDetailType = {
  copyrightId: number;
  status: string;
  imageUrl: string;
  title: string;
  type: string;
  ethPrice: string;
  wonPrice: string;
  singers: string;
  composers: string;
  lyricists: string;
  streamingUrls: string;
  isRegistered: string;
  registrationDoc: string;
};

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

const RegisterNftConfirmPage = () => {
  const { nftId } = useParams();
  const [detail, setDetail] = useState<NftDetailType | null>(null);

  useEffect(() => {
    if (!nftId) return;
    fetchNftDetail(Number(nftId))
      .then((data) => setDetail(data.data))
      .catch((err) => console.error("상세 조회 실패", err));
  }, [nftId]);

  console.log(detail);

  if (!detail) return;

  return (
    <PageContainer>
      <ContentWrapper>
        <Title>{detail.title} ・ 음원 NFT</Title>
        <ImageWrapper>
          <img
            src={detail.imageUrl}
            alt="미리보기"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </ImageWrapper>
        <PriceWrapper>
          <ETHPrice>최종 가치: {detail.ethPrice}</ETHPrice>
          <KRWPrice>한화 가치: {detail.wonPrice}</KRWPrice>
        </PriceWrapper>
        <InfoWrapper>
          <DetailTItleWrapper>
            <DetailTitle>상세 정보</DetailTitle>
          </DetailTItleWrapper>
          <InfoTable>
            <InfoRow label="음원/앨범명">{detail.title}</InfoRow>
            <InfoRow label="가수 정보">{detail.singers}</InfoRow>
            <InfoRow label="작곡가 정보">{detail.composers}</InfoRow>
            <InfoRow label="작사가 정보">{detail.lyricists}</InfoRow>
          </InfoTable>
          <InfoTable>
            <InfoRow label="저작권 등록 여부">
              {detail.isRegistered
                ? "저작권이 등록되어 있는 음원"
                : "저작권이 등록되지 않은 음원"}
            </InfoRow>
            <InfoRow label="저작권 등록증">
              <SvgIcDownload
                width={16}
                height={16}
                onClick={() => window.open(detail.registrationDoc)}
              />
            </InfoRow>
          </InfoTable>
          <InfoTable>
            <TableRow>
              <Label>음원 스트리밍 URL</Label>
            </TableRow>
            <TableRow>
              <UrlText onClick={() => window.open(detail.streamingUrls)}>
                <span>{detail.streamingUrls}</span>
              </UrlText>
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
  justify-content: space-between;
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
  margin-bottom: 24px;
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
  gap: 8px;
  max-width: 60%;
  white-space: nowrap;
  > span {
    font-size: ${theme.typography["small2-2"].fontSize};
    font-weight: ${theme.typography["small2-2"].fontWeight};
    color: ${theme.color.neutral.B70};
  }
  overflow: hidden !important;
  text-overflow: ellipsis;
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
