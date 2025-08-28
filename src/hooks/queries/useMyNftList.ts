import { getMyNftList, MyNftStatusType } from "@apis/myNft";
import { useQuery } from "@tanstack/react-query";

export const useMyNftList = (status: MyNftStatusType) => {
  return useQuery({
    queryKey: ["myNftList", status],
    queryFn: () => getMyNftList(status),
    staleTime: 60 * 1000,
  });
};
