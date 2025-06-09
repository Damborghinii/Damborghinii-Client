import { useState } from "react";

export const getSelctedType = () => {
  const [selectedType, setSelectedType] = useState<string>("최신순");

  return { selectedType };
};
