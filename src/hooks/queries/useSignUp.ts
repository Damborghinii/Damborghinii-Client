import { signUp } from "@apis/user";
import { useMutation } from "@tanstack/react-query";
import { SignUpResponse } from "src/types/user";
import { SignUpFormData } from "src/contexts/SignUpFormContext";

const useSignUp = () => {
  return useMutation<SignUpResponse, Error, SignUpFormData>({
    mutationFn: signUp,
  });
};

export default useSignUp;
