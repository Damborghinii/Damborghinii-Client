import styled from "@emotion/styled";

import { SubTopBar } from "@components/common/topBar/SubTopBar";
import { PawnCard } from "@pages/invesetment/_components/PawnCard";
import { useState } from "react";
import { NoticeSection } from "../_components/NoticeSection";
import { useNavigate, useParams } from "react-router-dom";

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
  const { loanId } = useParams();
  const navigate = useNavigate();

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
      <NoticeSection
        hasButton={true}
        onClick={() => navigate(`/loan-info-input/${loanId}`)}
      />
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
