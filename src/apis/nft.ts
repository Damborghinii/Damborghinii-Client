import { NftFormData } from "src/contexts/NftFormContext";
import axiosInstance from "./axios";
import { API_PATH } from "@constants/path";

export const createNft = async (formData: NftFormData) => {
  const form = new FormData();

  if (formData.copyrightFile) {
    form.append("registrationDoc", formData.copyrightFile);
  }

  if (formData.croppedImage) {
    form.append("image", formData.croppedImage);
  }

  const nftCreateRequest = {
    nftName: formData.nftName,
    title: formData.title,
    singers: formData.singers,
    composers: formData.composers,
    lyricists: formData.lyricists,
    streamingUrls: formData.streamingUrls,
    isRegistered: formData.isRegistered ?? false,
    ethPrice: formData.ethPrice,
  };

  form.append(
    "nftCreateRequest",
    new Blob([JSON.stringify(nftCreateRequest)], {
      type: "application/json",
    })
  );

  const response = await axiosInstance.post(API_PATH.NFT.REGISTER_NFT, form, {
    headers: {
      "Content-type": "multipart/form-data",
    },
  });
  return response.data;
};

type EvaluationResponse = {
  success: boolean;
  message: string;
  data: {
    ethPrice: string;
    wonPrice: string;
  };
};

export const evaluateNftValue = async (
  formData: NftFormData
): Promise<EvaluationResponse> => {
  console.log(API_PATH.NFT.EVALUATE_NFT_VALUE);
  const body = {
    nftName: formData.nftName,
    title: formData.title,
    singers: formData.singers,
    composers: formData.composers,
    lyricists: formData.lyricists,
    streamingUrls: formData.streamingUrls,
    isRegistered: formData.isRegistered ?? false,
  };
  const response = await axiosInstance.post(
    API_PATH.NFT.EVALUATE_NFT_VALUE,
    body
  );
  return response.data;
};

export const fetchNftDetail = async (copyrightId: number) => {
  const response = await axiosInstance.get(
    API_PATH.NFT.NFT_DETAIL.replace("{copyrightId}", copyrightId.toString())
  );
  return response.data;
};
