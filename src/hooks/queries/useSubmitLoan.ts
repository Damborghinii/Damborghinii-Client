import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postLoan } from "@apis/loan";

type SubmitLoanVars = {
  contractId: number;
  loanAmount: number;
  repaymentCount: number;
};

export const useSubmitLoan = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ contractId, loanAmount, repaymentCount }: SubmitLoanVars) =>
      postLoan(contractId, loanAmount, repaymentCount),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["loan"] });
      qc.invalidateQueries({ queryKey: ["loan", "conclusion"] });
    },
  });
};
