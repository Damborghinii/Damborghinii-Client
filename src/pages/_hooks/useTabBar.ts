import { useState } from "react";

export type RepaymentStatus = "scheduledRepayment" | "unpaid" | "repaid";

export const ADJ_STATUS: Record<RepaymentStatus, string> = {
  scheduledRepayment: "상환예정",
  unpaid: "미상환",
  repaid: "상환완료",
};

export const useTabBar = () => {
  const [status, setStatus] = useState<RepaymentStatus>("scheduledRepayment");

  return { status, setStatus };
};
