import axiosInstance from "@apis/axios";
import { API_PATH } from "@constants/path";
import { LoginResponse, SignUpResponse } from "src/types/user";
import { SignUpFormData } from "src/contexts/SignUpFormContext";

export const checkDuplicateId = async (loginId: string) => {
  const response = await axiosInstance.post(API_PATH.AUTH.CHECK_ID, {
    loginId,
  });
  return response.data;
};

export const signUp = async (data: SignUpFormData): Promise<SignUpResponse> => {
  const response = await axiosInstance.post(API_PATH.AUTH.SIGN_UP, data);
  return response.data;
};

export const login = async (data: {
  loginId: string;
  password: string;
}): Promise<LoginResponse> => {
  const response = await axiosInstance.post(API_PATH.AUTH.LOGIN, data);
  return response.data;
};
