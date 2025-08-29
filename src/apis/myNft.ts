import { API_PATH } from "@constants/path";
import axiosInstance, { BaseResponse } from "./axios";

// REGISTERED 이면 대출 신청 버튼 활성화 INVESTING 이면 비활성화 이런 맹키로
// → 모두 조회면 ALL
// → 등록이면 REGISTERED
// → 투자진행중이면 INVESTING

export type MyNftStatusType = "ALL" | "REGISTERED" | "INVESTING" | "COMPLETED";
export type MyInvestNftType = "ALL" | "INVESTING" | "COMPLETED";

export type CopyrightItem = {
  copyrightId: number;
  contractId: number;
  imageUrl: string;
  title: string;
  type: string;
  ethPrice: string;
  status: MyNftStatusType;
  progress: number | null;
  repaymentCount: number | null;
  round: number | null;
};

export const getMyNftList = async (
  status: MyNftStatusType
): Promise<BaseResponse<{ copyrights: CopyrightItem[] }>> => {
  const res = await axiosInstance.get(API_PATH.MYNFT.MY_NFT_LIST, {
    params: { status },
  });
  return res.data;
};

export const getMyInvestNftList = async (
  status: MyInvestNftType
): Promise<BaseResponse<{ copyrights: CopyrightItem[] }>> => {
  const res = await axiosInstance.get(API_PATH.MYNFT.MY_INVEST_NFT_LIST, {
    params: { status },
  });
  return res.data;
};
