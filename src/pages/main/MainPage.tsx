import { MainTitle } from "./_components/MainTitle";
import { getTotalCount } from "./_hooks/getTotalCount";

export const MainPage: React.FC = () => {
  const { count } = getTotalCount();

  return (
    <>
      <MainTitle mainText="전체 투자 진행건" subText={count} />
    </>
  );
};
