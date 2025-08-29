import { API_PATH } from "@constants/path";
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
  audioUrl: string;
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

// // 실제 응답 구조
// interface Copyright {
//   title: string;           // "똥마려"
//   singers: string;         // "고추"
//   isRegistered: string;    // "저작권이 등록되어 있는 음원"
//   wonPrice: string;        // "15,395,320원"
//   streamingUrls: string;   // "https://open.spotify.com/track/123456789"
// }

export const getLoanInformation = async (contractId: number) => {
  const url = API_PATH.LOAN.LOAN_INFO.replace(
    "{contractId}",
    String(contractId)
  );
  const res = await axiosInstance.get<BaseResponse<LoanCondition>>(url);
  return res.data;
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
  const url = API_PATH.LOAN.LOAN_INFO.replace(
    "{contractId}",
    String(contractId)
  );
  const res = await axiosInstance.get(url);
  return res.data;
};

export const getLoanConfirm = async (
  contractId: number,
  amount: number,
  count: number
): Promise<
  BaseResponse<{
    copyright: CopyrightDetail;
    loanCondition: LoanConditionConfirm;
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
