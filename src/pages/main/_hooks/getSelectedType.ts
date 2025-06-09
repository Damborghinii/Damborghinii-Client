import { useState } from "react";

export const getSelctedType = () => {
  const [selectedType, _] = useState<string>("최신순");

  // setSelectedType

  return { selectedType };
};
