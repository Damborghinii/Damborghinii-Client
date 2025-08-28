import axiosInstance, { BaseResponse } from "./axios";

export type ContractDetailResponse = {
  contract: {
    interestRate: string;
    loanAmount: string;
    loanType: string;
    monthlyInterest: string;
    overdueRate: string;
    paymentAmount: string;
    repaymentCount: string;
    repaymentPeriod: string;
  };
  copyright: {
    composers: string;
    ethPrice: string;
    imageUrl: string;
    isRegistered: string;
    lyricists: string;
    registrationDoc: string;
    singers: string;
    streamingUrls: string;
    title: string;
    type: string;
    wonPrice: string;
  };
  progress: {
    currentProgress: string;
    remainingInvestingMoney: string;
  };
  user: {
    job: string;
    name: string;
  };
};

export const getCopyrightDetail = async (
  contractId: number
): Promise<BaseResponse<ContractDetailResponse>> => {
  try {
    const res = await axiosInstance.get(`/api/v1/contracts/${contractId}`);
    console.log("저작권 상세 정보:", res);
    return res.data;
  } catch (error) {
    console.error("저작권 정보 조회 실패:", error);
    throw error;
  }
};
