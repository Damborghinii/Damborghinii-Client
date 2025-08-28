export const API_PATH = {
  AUTH: {
    LOGIN: "/api/v1/auth/login",
    SIGN_UP: "/api/v1/auth/sign-up",
    CHECK_ID: "/api/v1/users/check-id",
  },

  NFT: {
    REGISTER_NFT: "/api/v1/nfts",
    EVALUATE_NFT_VALUE: "/api/v1/copyrights/predict",
    NFT_DETAIL: "/api/v1/copyrights/{copyrightId}",
  },

  MYNFT: {
    MY_NFT_LIST: "/api/v1/me/copyrights",
    MY_INVEST_NFT_LIST: "/api/v1/me/invest/copyrights",
  },
};
