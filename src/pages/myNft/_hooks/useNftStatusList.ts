import { useState } from "react";
import { MyNftStatusType } from "@apis/myNft";
export const NFT_STATUS: Record<MyNftStatusType, string> = {
  ALL: "전체",
  REGISTERED: "등록",
  INVESTING: "투자진행중",
};

export const useTabBar = () => {
  const [tabstatus, setTabStatus] = useState<MyNftStatusType>("ALL");

  return { tabstatus, setTabStatus };
};
