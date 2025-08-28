import axiosInstance, { BaseResponse } from "./axios";

// 검색 필터 enum
export enum SearchFilter {
  HIGH_RETURN = "HIGH_RETURN",
  LOW_RISK = "LOW_RISK",
  SHORT_TERM = "SHORT_TERM",
  LONG_TERM = "LONG_TERM",
  ALL = "ALL",
}

// 검색 필터 라벨
export const SEARCH_FILTER_LABELS = {
  [SearchFilter.HIGH_RETURN]: "고수익 매물",
  [SearchFilter.LOW_RISK]: "비교적 안전한",
  [SearchFilter.SHORT_TERM]: "단기 상환",
  [SearchFilter.LONG_TERM]: "장기 상환",
  [SearchFilter.ALL]: "일반 전체",
} as const;

// 계약 타입 정의
export type NewContract = {
  contractId: number;
  loanAmount: string;
  repaymentCount: number;
  interestRate: string;
  copyright: {
    imageUrl: string;
    name: string;
    ethPrice: string;
  };
  progress: string;
  expirationTime: string;
};

// 계약 목록 조회 API
export const getContracts = async (
  searchFilter?: SearchFilter
): Promise<
  BaseResponse<{
    contracts: NewContract[];
  }>
> => {
  try {
    const params = searchFilter ? { searchFilter } : {};

    const res = await axiosInstance.get("/api/v1/contracts", { params });

    // 응답 데이터가 객체인지 확인
    if (!res.data || typeof res.data !== "object") {
      throw new Error(`Invalid response data type: ${typeof res.data}`);
    }

    return res.data;
  } catch (error) {
    throw error;
  }
};
