import { useState } from "react";

export type RepaymentStatus = "UPCOMING" | "OVERDUE" | "REPAID";

export const ADJ_STATUS: Record<RepaymentStatus, string> = {
  UPCOMING: "상환예정",
  OVERDUE: "미상환",
  REPAID: "상환완료",
};

export const useTabBar = () => {
  const [tabstatus, setTabStatus] = useState<RepaymentStatus>("UPCOMING");

  return { tabstatus, setTabStatus };
};
