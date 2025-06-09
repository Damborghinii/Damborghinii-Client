import * as S from "./Main.styled";

import { MainTitle } from "./_components/MainTitle";
import { getSelctedType } from "./_hooks/getSelectedType";
import { getTotalCount } from "./_hooks/getTotalCount";

export const MainPage: React.FC = () => {
  const { selectedType } = getSelctedType();
  const { count } = getTotalCount();

  return (
    <S.MainContainer>
      <MainTitle
        mainText="전체 투자 진행건"
        subText={count}
        selectedType={selectedType}
      />
    </S.MainContainer>
  );
};
