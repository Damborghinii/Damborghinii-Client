import * as S from "./MyNft.styled";

// import { useModal } from "../../hooks/useModal";
// import { useDeleteModal } from "../../components/common/modal/DeleteModal";
import { NftRegister } from "./_components/nftRegister/NftRegister";
import { NftTitle } from "./_components/nftTitle/NftTitle";
import { NftStatusTab } from "./_components/nftStatusList/NftStatusList";
import { MainTitle } from "@pages/main/_components/MainTitle";
import { NftCard } from "../main/_components/NftCard";

import { MyNftType } from "./type/nft";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMyLftList, MyNftStatusType } from "@apis/myNft";
import { useTabBar } from "./_hooks/useNftStatusList";

const MyNftPage = () => {
  const { tabstatus, setTabStatus } = useTabBar();
  const [nftList, setNftList] = useState<MyNftType[]>([]);
  const fetchData = async () => {
    const res = await getMyLftList(tabstatus);
    if (res.success && res.data) {
      const converted: MyNftType[] = res.data.copyrights.map((item) => ({
        image: item.imageUrl,
        nftName: item.title,
        value: item.ethPrice,
        nftType: item.type,
        isRegistered: item.status === "REGISTERED",
        id: String(item.copyrightId),
        onClick: () => {
          if (item.status === "REGISTERED") {
            navigate(`/loan-apply/${item.copyrightId}`);
          } else {
            console.log(`상태: ${item.status} → 대출신청 불가`);
          }
        },
      }));
      setNftList(converted);
    }
  };
  useEffect(() => {
    fetchData();
  }, [tabstatus]);

  const navigate = useNavigate();

  return (
    <S.MyNftWrapper>
      <NftRegister />
      <NftTitle>등록된 NFT 목록</NftTitle>
      <NftStatusTab
        tabStatus={tabstatus}
        onClick={(key) => setTabStatus(key as MyNftStatusType)}
      />
      <S.EntryWrapper>
        <MainTitle
          mainText={
            tabstatus === "ALL"
              ? "전체 투자 진행건"
              : tabstatus === "REGISTERED"
              ? "등록"
              : "투자 진행 중"
          }
          subText={`총 ${nftList.length}건`}
        />
        <S.NftCardContainer>
          {nftList.length > 0 &&
            nftList.map((nft) => <NftCard key={nft.id} {...nft} />)}
        </S.NftCardContainer>
      </S.EntryWrapper>
    </S.MyNftWrapper>
  );
};

export default MyNftPage;
