import { useNavigate } from "react-router-dom";
import Button from "../../../../components/common/button/Button";
import * as S from "./NftRegister.styled";

export const NftRegister: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/nft/register/basic");
  };
  return (
    <S.NftRegisterWrapper>
      <S.NftTextWrapper>
        <S.NftMainText>음원 등록</S.NftMainText>
      </S.NftTextWrapper>
      <Button
        size="extra"
        variant="primary"
        onClick={handleNavigate}
        style={{
          width: "100%",
        }}
      >
        등록하기
      </Button>
      <S.NftSubText>내가 보유한 음원을 등록하고 NFT로 전환해요.</S.NftSubText>
    </S.NftRegisterWrapper>
  );
};
