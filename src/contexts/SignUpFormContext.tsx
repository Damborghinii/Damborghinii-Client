import { createContext, ReactNode, useState, useContext } from "react";

export type JobType =
  | "COMPANY"
  | "SELF_EMPLOYED"
  | "FREELANCER"
  | "SOLDIER"
  | "HOMEMAKER"
  | "PROFESSIONAL"
  | "STUDENT"
  | "UNEMPLOYED"
  | "OTHER";

export type SignUpFormData = {
  loginId: string;
  password: string;
  birth: string;
  phoneNumber: string;
  job: JobType;
  walletAddr: string;
  name: string;
};

const defaultData: SignUpFormData = {
  loginId: "",
  password: "",
  birth: "",
  phoneNumber: "",
  job: "OTHER",
  walletAddr: "",
  name: "",
};

const SignUpFormContext = createContext<{
  formData: SignUpFormData;
  updateForm: (data: Partial<SignUpFormData>) => void;
  resetForm: () => void;
}>({
  formData: defaultData,
  updateForm: () => {},
  resetForm: () => {},
});

export const SignUpFormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<SignUpFormData>(defaultData);

  const updateForm = (data: Partial<SignUpFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const resetForm = () => {
    setFormData(defaultData);
  };

  return (
    <SignUpFormContext.Provider value={{ formData, updateForm, resetForm }}>
      {children}
    </SignUpFormContext.Provider>
  );
};

export const useSignUpForm = () => useContext(SignUpFormContext);
