import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postContractInvest } from "@apis/investment";

type Vars = { contractId: number; investment: number };

export const useInvestContract = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ contractId, investment }: Vars) =>
      postContractInvest(contractId, investment),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["contracts"] });
      qc.invalidateQueries({ queryKey: ["contract"] });
    },
  });
};
