import { registerNftIcons } from "@assets/icons";
import styled from "@emotion/styled";
import theme from "@styles/theme";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCopyrightDetail, ContractDetailResponse } from "@apis/musicDetail";
import Spacer from "@components/common/spacer/Spacer";
import { HorizontalDivider } from "@components/common/horizontalDivider/HorizontalDivider";

import { SubContent, SubTitle } from "@pages/invesetment/_components/Text";
import {
  ProgressBarFill,
  ProgressBarWrapper,
} from "./_components/MainLoanCard";
import Button from "@components/common/button/Button";
const INVEST_INFO_TEXT = [
  "투자 시 내 보유금액이 입력한 투자금액만큼 자동으로 인출되어요.",
  "투자시작일로부터 한 달 이내에 투자가 진행되지 않을 경우, 혹은 차입자에 의해 대출신청이 취소될 경우 인출되었던 투자금액은 시스템이 다시 자동으로 지급해요.",
  "모든 투자자가 모여 투자가 마감되면 투자가 확정되어요.",
  "내가 보유한 지분에 따라 매월 발생하는 월 이자, 연체금을 지급받아요",
  "마지막 회차에 남은 이자를 지급받고 투자한 원금을 돌려받아요.",
  "이자 및 원금이 모두 지불되지 못하였을 경우 NFT담보가 경매로 넘어가며, 보유한 지분에 따라 경매 수익을 지급받아요.",
];

const parsePercentage = (percentage: string): number => {
  return parseFloat(percentage.replace("%", ""));
};
interface TextProps {
  color?: string;
  size?: {
    fontSize: string;
    fontWeight: number;
  };
}

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

const MusicDetailPage = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [copyrightData, setCopyrightData] =
    useState<ContractDetailResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { contractId } = useParams<{ contractId: string }>();

  const handleIconClick = () => {
    setIsOpen((prev) => !prev);
  };

  const { arrow_up: ArrowUp, arrow_down: ArrowDown } = registerNftIcons;

  // 저작권 상세 정보 가져오기
  useEffect(() => {
    const fetchCopyrightData = async () => {
      if (!contractId) return;

      try {
        setIsLoading(true);
        const response = await getCopyrightDetail(Number(contractId));

        if (response.success && response.data) {
          setCopyrightData(response.data);
        }
      } catch (error) {
        console.error("저작권 정보 로딩 실패:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCopyrightData();
  }, [contractId]);

  // 스트리밍 URL들을 배열로 변환
  const getStreamingUrls = (streamingUrls: string): string[] => {
    if (!streamingUrls) return [];
    return streamingUrls
      .split(",")
      .map((url) => url.trim())
      .filter((url) => url);
  };

  if (isLoading) {
    return (
      <PageWrapper>
        <div style={{ padding: "40px", textAlign: "center" }}>
          데이터를 불러오는 중...
        </div>
      </PageWrapper>
    );
  }

  if (!copyrightData) {
    return (
      <PageWrapper>
        <div style={{ padding: "40px", textAlign: "center" }}>
          저작권 정보를 찾을 수 없습니다.
        </div>
      </PageWrapper>
    );
  }

  const streamingUrlList = getStreamingUrls(
    copyrightData.copyright.streamingUrls
  );

  return (
    <PageWrapper>
      <NftInfoWrapper>
        <NftPicture
          src={copyrightData.copyright.imageUrl || "/logo.svg"}
          alt={copyrightData.copyright.title}
        />
        <TextWrapper>
          <Title>{copyrightData.copyright.title}</Title>
          <Singers>{copyrightData.copyright.singers}</Singers>
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
                <InfoRow label="음원/앨범명">
                  {copyrightData.copyright.title}
                </InfoRow>
                <InfoRow label="가수 정보">
                  {copyrightData.copyright.singers}
                </InfoRow>
                <InfoRow label="작곡가 정보">
                  {copyrightData.copyright.composers}
                </InfoRow>
                <InfoRow label="작사가 정보">
                  {copyrightData.copyright.lyricists}
                </InfoRow>
              </InfoTable>

              <InfoTable>
                <InfoRow label="저작권 등록 여부">
                  {copyrightData.copyright.isRegistered}
                </InfoRow>
                <InfoRow label="저작권 등록증">
                  {copyrightData.copyright.registrationDoc ||
                    "등록된 파일 없음"}
                </InfoRow>
                <InfoRow label="음원 예상수익">
                  {copyrightData.copyright.wonPrice}
                </InfoRow>
              </InfoTable>

              {streamingUrlList.length > 0 && (
                <InfoTable>
                  <TableRow>
                    <Label>음원 스트리밍 URL</Label>
                  </TableRow>
                  <TableRow>
                    <UrlText>
                      {streamingUrlList.map((url, index) => (
                        <span key={index}>
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: theme.color.primary.P40,
                              textDecoration: "underline",
                              fontSize: theme.typography["small2-2"].fontSize,
                            }}
                          >
                            {url}
                          </a>
                        </span>
                      ))}
                    </UrlText>
                  </TableRow>
                </InfoTable>
              )}
            </>
          )}

          <Spacer height="30px" />

          <PriceWrapper>
            <ETHPrice>최종 가치: {copyrightData.copyright.ethPrice}</ETHPrice>
            <KRWPrice>한화 가치 약 {copyrightData.copyright.wonPrice}</KRWPrice>
          </PriceWrapper>

          <Spacer height="30px" />

          <RowTextWrapper>
            <SmallTitle color={theme.color.neutral.B50}>대출신청일</SmallTitle>
            <SmallText color={theme.color.neutral.B40}>2025-08-03</SmallText>
          </RowTextWrapper>

          <Spacer height="12px" />

          <RowTextWrapper>
            <SmallTitle color={theme.color.neutral.B50}>종료일</SmallTitle>
            <SmallText color={theme.color.neutral.B40}>2025-08-30</SmallText>
          </RowTextWrapper>
        </InfoWrapper>
      </NftInfoWrapper>
      <HorizontalDivider height="3px" />
      <ContentWrapper>
        <BodyTitle>대출 신청 정보</BodyTitle>
        <Spacer height="40px" />

        <RowWrapper>
          <CardTextWrapper>
            <SubTitle>대출방식</SubTitle>
            <SubContent>{copyrightData.contract.loanType}</SubContent>
          </CardTextWrapper>
        </RowWrapper>

        <Spacer height="0.75rem" />
        <HorizontalDivider />
        <Spacer height="0.75rem" />

        <RowWrapper>
          <CardTextWrapper>
            <SubTitle>대출액</SubTitle>
            <SubContent>{copyrightData.contract.loanAmount}</SubContent>
          </CardTextWrapper>
          <CardTextWrapper>
            <SubTitle>연이율</SubTitle>
            <SubContent>{copyrightData.contract.interestRate}</SubContent>
          </CardTextWrapper>
        </RowWrapper>

        <Spacer height="0.75rem" />

        <RowWrapper>
          <CardTextWrapper>
            <SubTitle>월 이자</SubTitle>
            <SubContent>{copyrightData.contract.monthlyInterest}</SubContent>
          </CardTextWrapper>
          <CardTextWrapper>
            <SubTitle>총 납부금액</SubTitle>
            <SubContent>{copyrightData.contract.paymentAmount}</SubContent>
          </CardTextWrapper>
        </RowWrapper>
        <Spacer height="0.75rem" />

        <RowWrapper>
          <CardTextWrapper>
            <SubTitle>연체율</SubTitle>
            <SubContent>{copyrightData.contract.overdueRate}</SubContent>
          </CardTextWrapper>
        </RowWrapper>

        <Spacer height="0.75rem" />
        <HorizontalDivider />
        <Spacer height="0.75rem" />

        <RowWrapper>
          <CardTextWrapper>
            <SubTitle>대출기간</SubTitle>
            <SubContent>{copyrightData.contract.repaymentPeriod}</SubContent>
          </CardTextWrapper>
          <CardTextWrapper>
            <SubTitle>납부회차</SubTitle>
            <SubContent>{copyrightData.contract.repaymentCount}</SubContent>
          </CardTextWrapper>
        </RowWrapper>

        <Spacer height="0.75rem" />
        <HorizontalDivider />
        <Spacer height="0.75rem" />

        <RowWrapper>
          <CardTextWrapper>
            <SubTitle>신청자</SubTitle>
            <SubContent>{copyrightData.user.name}</SubContent>
          </CardTextWrapper>
        </RowWrapper>
      </ContentWrapper>

      <HorizontalDivider height="3px" />
      <ContentWrapper>
        <BodyTitle>투자 진행률</BodyTitle>
        <Spacer height="20px" />
        <ProgressText>{copyrightData.progress.currentProgress}</ProgressText>
        <ProgressBarWrapper>
          <ProgressBarFill
            percentage={parsePercentage(copyrightData.progress.currentProgress)}
          />
          <Spacer height="10px" />
        </ProgressBarWrapper>
        <Spacer height="10px" />

        <SubWrapper>
          <span
            style={{
              fontSize: theme.typography["body2-3"].fontSize,
              fontWeight: theme.typography["body2-3"].fontWeight,
            }}
          >
            남은 투자금
          </span>

          <span
            style={{
              fontSize: theme.typography["body2-2"].fontSize,
              fontWeight: theme.typography["body2-2"].fontWeight,
              color: theme.color.secondary.S60,
            }}
          >
            {copyrightData.progress.remainingInvestingMoney}
          </span>
        </SubWrapper>

        <Spacer height="40px" />

        <InfoContainer>
          <InfoTitle>다음 조건으로 투자가 진행되어요.</InfoTitle>
          <InfoList>
            {INVEST_INFO_TEXT.map((text, index) => (
              <InfoItem key={index}>{text}</InfoItem>
            ))}
          </InfoList>
        </InfoContainer>

        <Button
          size="extra"
          onClick={() => navigate(`/loan-apply-detail/${contractId}`)}
        >
          투자하기
        </Button>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default MusicDetailPage;

// 기존 스타일 컴포넌트들은 동일
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
  object-fit: cover;
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

const ProgressText = styled.h3`
  font-size: ${theme.typography["small1-2"].fontSize};
  font-weight: ${theme.typography["small1-2"].fontWeight};
  color: ${theme.color.neutral.B50};
  margin-bottom: 8px;
`;

const RowTextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.1rem;
`;

const SmallText = styled.h3<TextProps>`
  ${({ theme }) => theme.typography["small1-2"]}
  color: ${({ color }) => color}
`;

const SmallTitle = styled.h3<TextProps>`
  ${({ theme }) => theme.typography["small1-3"]}
  color: ${({ color }) => color}
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 40px 29px;
`;

const BodyTitle = styled.h1`
  width: 100%;
  display: flex;

  ${({ theme }) => theme.typography["body1-1"]}
  color: ${({ theme }) => theme.color.neutral.B60};
`;

const RowWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  gap: 10%;
  padding-right: 2rem;
`;

const CardTextWrapper = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SubWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoContainer = styled.div`
  background-color: ${theme.color.neutral.B00};
  padding: 20px;
  border-radius: 4px;
  margin: 16px 0;
  margin-bottom: 50px;
`;

const InfoTitle = styled.h3`
  ${theme.typography["small1-1"]}
  color: ${theme.color.neutral.B70};
  margin-bottom: 16px;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InfoItem = styled.li`
  ${theme.typography["small1-2"]}
  color: ${theme.color.neutral.B50};
  margin-bottom: 12px;
  padding-left: 16px;
  position: relative;

  &::before {
    content: "•";
    color: ${theme.color.primary.P50};
    position: absolute;
    left: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
