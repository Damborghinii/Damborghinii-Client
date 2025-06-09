import { useState } from "react";
import BottomSheet, {
  Option,
} from "../../components/common/bottomSheet/BottomSheet";
import Button from "../../components/common/button/Button";

const MY_OPTIONS: Option[] = [
  { value: "latest", label: "최신순" },
  { value: "value", label: "높은 가치 순" },
  { value: "art", label: "아트 NFT만 보기" },
];

const InvestmentPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState<string>("latest");
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>필터 열기</button>
      {isOpen && (
        <BottomSheet
          title="정렬순서"
          options={MY_OPTIONS}
          selected={sortOrder}
          onSelect={(value) => setSortOrder(value)}
          onClose={() => setIsOpen(false)}
        />
      )}
      <div>선택된 옵션은 {sortOrder}</div>
      <Button
        children="수정하기"
        size="medium"
        variant="line-primary"
        disabled
      />
    </div>
  );
};

export default InvestmentPage;
