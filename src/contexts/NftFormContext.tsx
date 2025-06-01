// 1. context/NftFormContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

export type NftFormData = {
  name: string;
  type: "art" | "music" | null;
  songTitle: string;
  singers: string[];
  composers: string[];
  lyricists: string[];
  streamingUrls: string[];
};

const defaultData: NftFormData = {
  name: "",
  type: null,
  songTitle: "",
  singers: [""],
  composers: [""],
  lyricists: [""],
  streamingUrls: [""],
};

const NftFormContext = createContext<{
  formData: NftFormData;
  updateForm: (data: Partial<NftFormData>) => void;
}>({
  formData: defaultData,
  updateForm: () => {},
});

export const NftFormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<NftFormData>(defaultData);

  const updateForm = (data: Partial<NftFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <NftFormContext.Provider value={{ formData, updateForm }}>
      {children}
    </NftFormContext.Provider>
  );
};

export const useNftForm = () => useContext(NftFormContext);
