import axiosInstance, { BaseResponse } from "./axios";

/**
 * 조회하려는 상환일정의 상태입니다.
    → 상환예정이면 UPCOMING
    → 미상환이면 OVERDUE
    → 상환완료면 REPAID
 * 
    조회하려는 계약자의 역할입니다.
→ 내가 상환해요면 BORROWER
→ 내가 상환받아요면 LENDER
 */

export interface AdjustmentParamsType {
  status: "UPCOMING" | "OVERDUE" | "REPAID";
  role: "BORROWER" | "LENDER";
}
export type AdjustmentInfo = {
  cash: number;
  totalContracts: number;
  totalAmount: number;
  repaymentSchedules: {
    repaymentScheduleList: RepaymentSchedule[];
  };
};

export type RepaymentSchedule = {
  repaymentScheduleId: number;
  totalRepaymentAmount: number;
  repaymentAmount: number;
  interestRate: number;
  lateFee: number;
  round: number;
  repaymentDate: string;
  settlementDate: string;
  relativeDays: string;
  nftImageUrl: string;
  nftName: string;
  stake: number;
  ethPrice: number;
};

export const getAdjustmentInfo = async ({
  status,
  role,
}: AdjustmentParamsType): Promise<BaseResponse<AdjustmentInfo>> => {
  try {
    const res = await axiosInstance.get(
      `/api/v1/me/contracts/confirmed?status=${status}&role=${role}`
    );
    console.log(res);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const patchRepaymentContract = async (repaymentScheduleId: number) => {
  try {
    const res = await axiosInstance.get(
      `/api/v1/me/contracts/${repaymentScheduleId}/repayment`
    );
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
