import styled from "@emotion/styled";

import { SubTopBar } from "@components/common/topBar/SubTopBar";
import { PawnCard } from "@pages/invesetment/_components/PawnCard";
import { useState } from "react";
import Spacer from "@components/common/spacer/Spacer";

export const LoanApply = () => {
  const DUMMY_COPYRIGHT = {
    imageUrl: "이미지 링크",
    name: "레전드 nft",
    type: "음원 NFT",
    ethPrice: "1.2987ETH",
    wonPrice: "28,439,433원",
    title: "강남스타일",
    singers: "싸이",
    composers: "내가 어케아노",
    lyricists: "싸이겠지 뭐",
    streamingUrls: "대충 유튜브 링크",
    isRegistered: "저작권이 등록되어 있는 음원",
    registrationDoc: "파일 url로 줘야될 거 같은데 될려나?",
  };
  const [isFold, setIsFold] = useState<boolean>(false);

  return (
    <MainWrapper>
      <SubTopBar title={"대출 신청"} />
      <SubWrapper>
        <PawnCard
          {...DUMMY_COPYRIGHT}
          isFold={isFold}
          onClick={() => setIsFold(!isFold)}
        />
      </SubWrapper>
      <NoticeWrapper>
        <MainText>다음 조건으로 대출이 가능해요.</MainText>
        <TextRowWrapper>
          <MainTitleText>대출방식</MainTitleText>
          <div>
            <MainContentText>만기상환방식</MainContentText>
            <Spacer height="0.5rem" />

            <SubContentText>
              매달 이자를 지불하고, 대출액을 한번에 갚아요.
            </SubContentText>
          </div>
        </TextRowWrapper>
        <TextRowWrapper>
          <MainTitleText>대출기간</MainTitleText>
          <MainContentText>1년 이하</MainContentText>
        </TextRowWrapper>
        <TextRowWrapper>
          <MainTitleText>대출액</MainTitleText>
          <MainContentText>0원 ~ 160,000,000원</MainContentText>
        </TextRowWrapper>
        <TextRowWrapper>
          <MainTitleText>연이율</MainTitleText>
          <div>
            <MainContentText>30%</MainContentText>
            <Spacer height="0.5rem" />
            <SubContentText>
              대출액x0.3%0.12을 매달 월 이자로 지불해요.
            </SubContentText>
          </div>
        </TextRowWrapper>
        <TextRowWrapper>
          <MainTitleText>연체율</MainTitleText>
          <div>
            <MainContentText>5%</MainContentText>
            <Spacer height="0.5rem" />
            <SubContentText>
              이자, 원금 연체 시, 미수금 월 이자, 원금 단위로 상환해야 하는
              금액의 5%를 연체금으로 추가 지불해요.
            </SubContentText>
          </div>
        </TextRowWrapper>
        <Button onClick={() => alert("뚝딱")}>희망 정보 입력</Button>
      </NoticeWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
`;

const SubWrapper = styled.div`
  width: 100%;
  padding: 0 1.875rem;
`;

const NoticeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 1.875rem;
  gap: 2rem;
  background-color: ${({ theme }) => theme.color.neutral.B00};
  flex-grow: 1;
`;

const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  background-color: ${({ theme }) => theme.color.neutral.B50};
  border-radius: 0.25rem;

  ${({ theme }) => theme.typography["body1-2"]}
  color: ${({ theme }) => theme.color.neutral.white};
`;

const MainText = styled.h1`
  ${({ theme }) => theme.typography["body1-1"]}
  color: ${({ theme }) => theme.color.neutral.B60};
`;

const MainTitleText = styled.h2`
  min-width: 3rem;
  ${({ theme }) => theme.typography["small1-3"]}
  color: ${({ theme }) => theme.color.neutral.B40};
`;

const MainContentText = styled.h2`
  ${({ theme }) => theme.typography["body2-2"]}
  color: ${({ theme }) => theme.color.neutral.B70};
`;

const SubContentText = styled.h3`
  ${({ theme }) => theme.typography["small2-3"]}
  color: ${({ theme }) => theme.color.neutral.B40};
`;

const TextRowWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1.25rem;
`;
