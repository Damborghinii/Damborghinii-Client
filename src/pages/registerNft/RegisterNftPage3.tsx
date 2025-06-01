import React from "react";
import { useNftForm } from "../../contexts/NftFormContext";

const RegisterNftPage3 = () => {
  const { formData } = useNftForm();
  console.log("데이터들:", formData);
  return <div>RegisterNftPage3</div>;
};

export default RegisterNftPage3;
