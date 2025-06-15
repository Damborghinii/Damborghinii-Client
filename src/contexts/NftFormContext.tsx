import { createContext, useContext, useState, ReactNode } from "react";
import { fileToBase64, base64ToFile } from "../utils/fileConverter";

export type NftFormData = {
  nftName: string;
  nftType: "art" | "music" | null;
  title: string;
  singers: string[];
  composers: string[];
  lyricists: string[];
  streamingUrls: string[];
  isRegistered: boolean | null;
  copyrightFile: File | null;
  copyrightFileName: string | null;
  copyrightBase64: string | null;
  image: File | null;
  imageBase64: string | null;
  croppedImage: File | null;
  croppedBase64: string | null;
  ethPrice: string;
  wonPrice: string;
};

const defaultData: NftFormData = {
  nftName: "",
  nftType: null,
  title: "",
  singers: [""],
  composers: [""],
  lyricists: [""],
  streamingUrls: [""],
  isRegistered: null,
  copyrightFile: null,
  copyrightBase64: null,
  copyrightFileName: null,
  image: null,
  imageBase64: null,
  croppedImage: null,
  croppedBase64: null,
  ethPrice: "",
  wonPrice: "",
};

const NftFormContext = createContext<{
  formData: NftFormData;
  updateForm: (data: Partial<NftFormData>) => void;
  resetForm: () => void;
}>({
  formData: defaultData,
  updateForm: () => {},
  resetForm: () => {},
});

export const NftFormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<NftFormData>(() => {
    const stored = localStorage.getItem("nftFormData");
    const parsed = stored ? JSON.parse(stored) : null;

    const restored: Partial<NftFormData> = {};

    if (parsed?.imageBase64)
      restored.image = base64ToFile(parsed.imageBase64, "image");

    if (parsed?.copyrightBase64 && parsed?.copyrightFileName)
      restored.copyrightFile = base64ToFile(
        parsed.copyrightBase64,
        parsed.copyrightFileName
      );

    return { ...defaultData, ...parsed, ...restored };
  });

  const updateForm = async (data: Partial<NftFormData>) => {
    const base64Updates: Partial<NftFormData> = {};

    if (data.image) base64Updates.imageBase64 = await fileToBase64(data.image);

    if (data.copyrightFile != null) {
      base64Updates.copyrightBase64 = await fileToBase64(data.copyrightFile);
      base64Updates.copyrightFileName = data.copyrightFile.name;
    }

    const updated = { ...formData, ...data, ...base64Updates };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { image, copyrightFile, ...serializable } = updated;
    localStorage.setItem("nftFormData", JSON.stringify(serializable));

    setFormData(updated);
  };

  const resetForm = () => {
    localStorage.removeItem("nftFormData");
    setFormData(defaultData);
  };

  return (
    <NftFormContext.Provider value={{ formData, updateForm, resetForm }}>
      {children}
    </NftFormContext.Provider>
  );
};

export const useNftForm = () => useContext(NftFormContext);
