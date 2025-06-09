import styled from "@emotion/styled";

export const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.color.neutral.B00};
`;

export const MainCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;
  padding: 0 1rem;
`;
