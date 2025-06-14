import { login } from "@apis/user";
import { useMutation } from "@tanstack/react-query";
import { LoginResponse } from "src/types/user";

const useLogin = () => {
  return useMutation<
    LoginResponse,
    Error,
    { loginId: string; password: string }
  >({
    mutationFn: login,
  });
};

export default useLogin;
