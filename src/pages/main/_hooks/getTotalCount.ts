import { useState } from "react";

export const getTotalCount = () => {
  const [totalCount, setTotalCount] = useState<number>(3);

  return { count: `총 ${totalCount}건` };
};
