import styled from "@emotion/styled";

import { PawnCard } from "@pages/invesetment/_components/PawnCard";
import { useEffect, useState } from "react";
import { NoticeSection } from "../_components/NoticeSection";
import { useNavigate, useParams } from "react-router-dom";
import { CopyrightDetail, getLoanInfo, LoanCondition } from "@apis/loan";

export const LoanApply = () => {
  const [isFold, setIsFold] = useState<boolean>(false);
  const { loanId, contractId } = useParams();
  const navigate = useNavigate();
  const [copyright, setCopyright] = useState<CopyrightDetail | null>(null);
  const [condition, setCondition] = useState<LoanCondition>({
    loanType: "",
    loanPeriod: "",
    loanAmount: "",
    interestRate: "",
    overdueRate: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      if (contractId) {
        const res = await getLoanInfo(Number(contractId));
        if (res.success && res.data) {
          setCopyright({
            ...res.data.copyright,
            musicTitle: res.data.copyright.title,
          });
          setCondition({ ...res.data.loanCondition });
        }
      }
    };

    fetchData();
  }, [contractId]);
  return (
    <MainWrapper>
      <SubWrapper>
        <PawnCard
          imageUrl={copyright?.imageUrl ?? ""}
          title={copyright?.title ?? ""}
          type={copyright?.type ?? ""}
          ethPrice={copyright?.ethPrice ?? ""}
          wonPrice={copyright?.wonPrice ?? ""}
          musicTitle={copyright?.musicTitle ?? ""}
          singers={copyright?.singers ?? ""}
          composers={copyright?.composers ?? ""}
          lyricists={copyright?.lyricists ?? ""}
          streamingUrls={copyright?.streamingUrls ?? ""}
          isRegistered={copyright?.isRegistered ?? ""}
          registrationDoc={copyright?.registrationDoc ?? ""}
          isFold={isFold}
          onClick={() => setIsFold(!isFold)}
        />
      </SubWrapper>
      <NoticeSection
        condition={condition}
        hasButton={true}
        onClick={() => navigate(`/loan-info-input/${loanId}/${contractId}`)}
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
