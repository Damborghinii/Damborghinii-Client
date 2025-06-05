import styled from "@emotion/styled";

interface MainTitleProps {
  mainText: string;
  subText: string;
}

export const MainTitle: React.FC<MainTitleProps> = ({
  mainText,
  subText,
}: MainTitleProps) => {
  return (
    <TitleHeader>
      <TitleWrapper>
        <MainText>{mainText}</MainText>
        <SubText>{subText}</SubText>
      </TitleWrapper>
    </TitleHeader>
  );
};

const TitleHeader = styled.header`
  width: 100%;
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const MainText = styled.h1`
  ${({ theme }) => theme.typography["body1-1"]}
`;

const SubText = styled.h2`
  ${({ theme }) => theme.typography["body2-1"]}

  color : ${({ theme }) => theme.color.primary.P50}
`;
