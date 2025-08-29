import { useQuery } from "@tanstack/react-query";
import {
  AgreementCopyright,
  AgreementLoanCondition,
  concludeLoan,
  CreationDate,
} from "@apis/loan";
import { BaseResponse } from "@apis/axios";

type LoanAgreementResponse = BaseResponse<{
  loanCondition: AgreementLoanCondition;
  copyright: AgreementCopyright;
  creationDate: CreationDate;
}>;

export const useLoanAgreement = (
  contractId?: number,
  amount?: number,
  count?: number
) => {
  return useQuery<LoanAgreementResponse>({
    queryKey: ["loan", "conclusion", contractId, amount, count],
    queryFn: () => concludeLoan(contractId!, amount!, count!),
    enabled: !!contractId && !!amount && !!count,
    staleTime: 60 * 1000,
  });
};
