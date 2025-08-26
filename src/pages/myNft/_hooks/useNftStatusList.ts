import { useState } from "react";

export type MyNftTabType = "ISSUED" | "INVESTED";

export const MY_NFT_TAB_LABELS: Record<MyNftTabType, string> = {
  ISSUED: "내가 발행한",
  INVESTED: "내가 투자한",
};

export const useTabBar = () => {
  const [currentTab, setCurrentTab] = useState<MyNftTabType>("ISSUED");

  return { currentTab, setCurrentTab };
};
