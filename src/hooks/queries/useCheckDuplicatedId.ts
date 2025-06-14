import { checkDuplicateId } from "@apis/user";
import { useMutation } from "@tanstack/react-query";

const useCheckDuplicateId = () => {
  return useMutation({
    mutationFn: (loginId: string) => checkDuplicateId(loginId),
  });
};

export default useCheckDuplicateId;
