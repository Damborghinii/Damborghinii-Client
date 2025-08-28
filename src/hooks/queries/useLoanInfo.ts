import { getLoanInfo } from "@apis/loan";
import { useQuery } from "@tanstack/react-query";

export const useLoanInfo = (contractId?: number) => {
  return useQuery({
    queryKey: ["loanInfo", contractId],
    queryFn: () => getLoanInfo(contractId as number),
    enabled: !!contractId,
    staleTime: 60 * 1000,
  });
};
