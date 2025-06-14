import { SubTopBar } from "@components/common/topBar/SubTopBar";
import { AdjustmentCard } from "../_components/AdjustmentCard";
import { AdjustmentTab } from "../_components/AdjustmentTabBar";

export const AdjustmentReceived = () => {
  return (
    <>
      <SubTopBar title="내가 상환받아요" />
      <AdjustmentCard balance="1,600원" />
      <AdjustmentTab />
    </>
  );
};
