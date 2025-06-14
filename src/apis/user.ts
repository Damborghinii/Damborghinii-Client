import axiosInstance from "@apis/axios";
import { API_PATH } from "@constants/path";

export const checkDuplicateId = async (loginId: string) => {
  const response = await axiosInstance.get(API_PATH.AUTH.CHECK_ID, {
    params: { loginId },
  });
  return response.data;
};
