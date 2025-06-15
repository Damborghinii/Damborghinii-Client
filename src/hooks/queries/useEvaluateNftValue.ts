import { evaluateNftValue } from "@apis/nft";
import { useMutation } from "@tanstack/react-query";
import { NftFormData } from "src/contexts/NftFormContext";

const useEvaluateNftValue = () => {
  return useMutation({
    mutationFn: (formData: NftFormData) => evaluateNftValue(formData),
  });
};

export default useEvaluateNftValue;
