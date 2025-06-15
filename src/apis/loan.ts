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

export type LoanConditionConfirm = {
  loanType: string;
  loanAmount: string;
  interestRate: string;
  monthlyInterest: string;
  totalPayment: string;
  overdueRate: string;
  loanPeriod: string;
  repaymentCount: string;
};

export type Copyright = {
  imageUrl: string;
  title: string;
  ethPrice: string;
  wonPrice: string;
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

export const getLoanConfirm = async (
  contractId: number,
  amount: number,
  count: number
): Promise<
  BaseResponse<{
    loanCondition: LoanConditionConfirm;
    copyright: Copyright;
  }>
> => {
  try {
    const res = await axiosInstance.get(
      `/api/v1/contracts/${contractId}/loans/check?amount=${amount}&count=${count}`
    );

    console.log(res);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const postLoan = async (
  contractId: number,
  loanAmount: number,
  repaymentCount: number
): Promise<BaseResponse<null>> => {
  try {
    const res = await axiosInstance.post(`/api/v1/contracts/${contractId}`, {
      loanAmount,
      repaymentCount,
    });
    console.log(res);
    return res.data;
  } catch (err) {
    throw err;
  }
};
