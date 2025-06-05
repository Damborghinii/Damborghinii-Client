import { useState } from "react";

export type NftStatusKey = "all" | "register" | "progress" | "contract";

export const NFT_STATUS: Record<NftStatusKey, string> = {
  all: "전체",
  register: "등록",
  progress: "투자진행중",
  contract: "계약중",
};

export const useNftStatusList = () => {
  const [nftStatus, setNftStatus] = useState<NftStatusKey>("all");

  return { nftStatus, setNftStatus };
};
