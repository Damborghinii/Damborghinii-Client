import { useState } from "react";

export const getTotalCount = () => {
  const [totalCount, _] = useState<number>(3);

  //setTotalCount

  return { count: `총 ${totalCount}건` };
};
