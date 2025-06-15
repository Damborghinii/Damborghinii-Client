import axiosInstance, { BaseResponse } from "./axios";

export type CopyrightDetail = {
  imageUrl: string;
  title: string;
  type: string;
  ethPrice: string;
  wonPrice: string;
  musicTitle: string;
  singers: string;
  composers: string;
  lyricists: string;
  streamingUrls: string;
  isRegistered: string;
  registrationDoc: string;
};

export type LoanCondition = {
  loanType: string;
  loanPeriod: string;
  loanAmount: string;
  interestRate: string;
  overdueRate: string;
};

export const getLoanInfo = async (
  contractId: number
): Promise<
  BaseResponse<{
    copyright: CopyrightDetail;
    loanCondition: LoanCondition;
    minimumLoanAmount: string;
    maximumLoanAmount: string;
    interestCalculationRatio: number;
  }>
> => {
  try {
    const res = await axiosInstance.get(
      `/api/v1/contracts/${contractId}/loans`
    );
    console.log(res);

    return res.data;
  } catch (err) {
    throw err;
  }
};
