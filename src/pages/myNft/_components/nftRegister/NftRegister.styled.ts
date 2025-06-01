import styled from "@emotion/styled";

export const NftRegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1rem;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.color.neutral.B10};
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral.B10};
`;

export const NftTextWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const NftMainText = styled.h1`
  ${({ theme }) => theme.typography["body1-1"]}
`;

export const NftSubText = styled.h3`
  ${({ theme }) => theme.typography["small1-3"]}
`;
