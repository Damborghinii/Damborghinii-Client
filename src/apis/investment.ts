import axiosInstance from "./axios";

export const getContracts = async () => {
  try {
    const res = await axiosInstance.get("/api/v1/contracts");
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
