import Button from "../../../components/common/button/Button";
import * as S from "./NftRegister.styled";

export const NftRegister: React.FC = () => {
  return (
    <S.NftRegisterWrapper>
      <S.NftTextWrapper>
        <S.NftMainText>내 NFT 등록</S.NftMainText>
        <S.NftSubText>
          내가 보유한 NFT를 등록하고 현재 가치를 알아봐요
        </S.NftSubText>
      </S.NftTextWrapper>
      <Button variant="line-primary">NFT 등록</Button>
    </S.NftRegisterWrapper>
  );
};
