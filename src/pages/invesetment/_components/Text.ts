import styled from "@emotion/styled";

interface MainContentProps {
  isBlack?: boolean;
}

export const SubTitle = styled.h2`
  ${({ theme }) => theme.typography["small1-3"]};
  color: ${({ theme }) => theme.color.neutral.B40};
`;

export const SubContent = styled.h2`
  ${({ theme }) => theme.typography["small1-2"]};
  color: ${({ theme }) => theme.color.neutral.B70};
`;

export const MainTitle = styled.h1`
  ${({ theme }) => theme.typography["body2-3"]};

  color: ${({ theme }) => theme.color.neutral.B40};
`;

export const MainContent = styled.h1<MainContentProps>`
  ${({ theme }) => theme.typography["body2-2"]};
  color: ${({ isBlack, theme }) =>
    isBlack ? theme.color.neutral.B70 : theme.color.primary.P60};
`;

export const NewMainTitle = styled.h2`
  ${({ theme }) => theme.typography["small1-3"]};

  color: ${({ theme }) => theme.color.neutral.B40};
`;

export const NewMainContent = styled.h1<MainContentProps>`
  ${({ theme }) => theme.typography["small1-2"]};
  color: ${({ isBlack, theme }) =>
    isBlack ? theme.color.neutral.B70 : theme.color.primary.P60};
`;
