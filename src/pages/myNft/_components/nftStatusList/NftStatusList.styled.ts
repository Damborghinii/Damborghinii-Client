import styled from "@emotion/styled";

export const NftStatusListWrapper = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.75rem;
  border-bottom: 2px solid ${({ theme }) => theme.color.neutral.B10};
`;

interface TitleProps {
  active: boolean;
}

export const NftStatusTab = styled.h2<TitleProps>`
  ${({ active, theme }) =>
    active ? theme.typography["body1-1"] : theme.typography["body1-2"]};
  padding: 0.5rem 0;
  margin-bottom: -2.25px;
  color: ${({ active, theme }) =>
    active ? theme.color.neutral.B70 : theme.color.neutral.B40};
  border-bottom: ${({ active, theme }) =>
    active ? `3px solid ${theme.color.neutral.B70}` : `3px solid transparent`};
  cursor: pointer;
`;
