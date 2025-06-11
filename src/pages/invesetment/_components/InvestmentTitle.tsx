import styled from "@emotion/styled";

interface InvestmentTitleProps {
  text: string;
}

export const InvestmentTitle = ({ text }: InvestmentTitleProps) => {
  return <Title>{text}</Title>;
};

const Title = styled.h1`
  ${({ theme }) => theme.typography["body1-1"]}
`;
