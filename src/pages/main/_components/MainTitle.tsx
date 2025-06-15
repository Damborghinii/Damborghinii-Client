// import { IcDown } from "@assets/svg";
import styled from "@emotion/styled";

interface MainTitleProps {
  mainText: string;
  subText: string;
  selectedType?: string;
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
      {/* {selectedType && (
        <SelectWrapper>
          {selectedType}
          <IcDown width={14} height={14} />
        </SelectWrapper>
      )} */}
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
  padding-top: 0.05rem;
  ${({ theme }) => theme.typography["body1-1"]}
`;

const SubText = styled.h2`
  ${({ theme }) => theme.typography["body2-1"]}

  color : ${({ theme }) => theme.color.primary.P50}
`;
/* 
const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  min-width: 3rem;
  padding: 0.25rem;

  ${({ theme }) => theme.typography["small1-3"]}
`; */
