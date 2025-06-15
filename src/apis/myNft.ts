import axiosInstance, { BaseResponse } from "./axios";

// REGISTERED 이면 대출 신청 버튼 활성화 INVESTING 이면 비활성화 이런 맹키로
// → 모두 조회면 ALL
// → 등록이면 REGISTERED
// → 투자진행중이면 INVESTING

export type MyNftStatusType = "REGISTERED" | "INVESTING" | "ALL";

export type CopyrightItem = {
  copyrightId: number;
  imageUrl: string;
  title: string;
  type: string;
  ethPrice: string;
  status: MyNftStatusType;
};

export const getMyLftList = async (
  status: MyNftStatusType
): Promise<BaseResponse<{ copyrights: CopyrightItem[] }>> => {
  try {
    const res = await axiosInstance.get(
      `/api/v1/me/copyrights?status=${status}`
    );
    console.log(res);

    return res.data;
  } catch (err) {
    throw err;
  }
};
