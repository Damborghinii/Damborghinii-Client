import { createNft } from "@apis/nft";
import { useMutation } from "@tanstack/react-query";
import { NftFormData } from "src/contexts/NftFormContext";

const useCreateNft = () => {
  return useMutation({
    mutationFn: (formData: NftFormData) => createNft(formData),
  });
};

export default useCreateNft;
