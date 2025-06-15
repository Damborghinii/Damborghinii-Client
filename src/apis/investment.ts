import axiosInstance, { BaseResponse } from "./axios";

export type Contract = {
  contractId: number;
  loanAmount: string;
  interestRate: string;
  copyright: {
    name: string;
    imageUrl: string;
    ethPrice: string;
  };
  progress: string;
};

export type ContractDetail = {
  loanAmount: string;
  monthlyInterest: string;
  loanType: string;
  interestRate: string;
  paymentAmount: string;
  overdueRate: string;
  repaymentPeriod: string;
  repaymentCount: string;
};

export type ContractUser = {
  name: string;
  job: string;
};

export type ContractCopyright = {
  imageUrl: string;
  title: string;
  type: string;
  ethPrice: string;
  wonPrice: string;
  singers: string;
  composers: string;
  lyricists: string;
  streamingUrls: string;
  isRegistered: string;
  registrationDoc: string;
  musicTitle: string;
};

export type ContractProgress = {
  currentProgress: string;
  remainingInvestingMoney: string;
};

export type InvestmentLimitInfo = {
  minimumLoanAmount: string;
  maximumLoanAmount: string;
  shareCalculationRatio: number;
  interestCalculationRatio: number;
};

export const getContracts = async (): Promise<
  BaseResponse<{ contracts: Contract[] }>
> => {
  try {
    const res = await axiosInstance.get("/api/v1/contracts");
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getContractDetail = async (
  contractId: number
): Promise<
  BaseResponse<{
    contract: ContractDetail;
    user: ContractUser;
    copyright: ContractCopyright;
    progress: ContractProgress;
  }>
> => {
  try {
    const res = await axiosInstance.get(`/api/v1/contracts/${contractId}`);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getContractAmount = async (
  contractId: number
): Promise<BaseResponse<InvestmentLimitInfo>> => {
  try {
    const res = await axiosInstance.get(
      `/api/v1/contracts/${contractId}/invest`
    );
    console.log(res);
    return res.data;
  } catch (err) {
    throw err;
  }
};
