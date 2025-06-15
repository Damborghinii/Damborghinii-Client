import axiosInstance, { BaseResponse } from "./axios";

export type Contract = {
  contractId: number;
  loanAmount: string;
  interestRate: string;
  copyright: {
    name: string;
    ethPrice: string;
  };
  progress: string;
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
