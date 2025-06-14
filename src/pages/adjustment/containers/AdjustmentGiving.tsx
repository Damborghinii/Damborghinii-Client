import { SubTopBar } from "@components/common/topBar/SubTopBar";
import { AdjustmentCard } from "../_components/AdjustmentCard";

export const GivingAdjustment = () => {
  return (
    <>
      <SubTopBar title="내가 상환해요" />
      <AdjustmentCard balance="1,600원" isReceivedType={false} />
    </>
  );
};
