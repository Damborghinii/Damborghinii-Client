import { fetchNftDetail } from "@apis/nft";
import { useQuery } from "@tanstack/react-query";

export const useMyNftDetail = (copyrightId: number) => {
  return useQuery({
    queryKey: ["nftDetail", copyrightId],
    queryFn: () => fetchNftDetail(copyrightId),
    enabled: !!copyrightId,
    staleTime: 60 * 1000,
  });
};
