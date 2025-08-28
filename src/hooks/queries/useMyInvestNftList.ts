import { getMyInvestNftList, MyInvestNftType } from "@apis/myNft";
import { useQuery } from "@tanstack/react-query";

export const useMyInvestNftList = (status: MyInvestNftType) => {
  return useQuery({
    queryKey: ["myInvestNftList", status],
    queryFn: () => getMyInvestNftList(status),
    staleTime: 60 * 1000,
  });
};
