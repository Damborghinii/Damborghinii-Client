import styled from "@emotion/styled";
import theme from "@styles/theme";

export const MainContainer = styled.div`
  min-height: calc(100dvh);
  padding-top: 1rem;
  padding-bottom: 7rem;
`;

export const MainCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;
  padding: 0 1rem;
`;

export const MainSearchContainer = styled.div`
  position: relative;
  width: 100%;
  height: 2.75rem;
  padding: 0 1.375rem;
`;

export const MainSearchItem = styled.input`
  width: 100%;
  height: 100%;
  padding: 0.5rem 0.75rem;
  background-color: ${theme.color.neutral.B00};
  border-radius: 1rem;
  border: none;
  outline: none;

  color: ${theme.color.neutral.B70};
  ${theme.typography["body2-2"]};

  &::placeholder {
    color: ${theme.color.neutral.B40};
    opacity: 1;
  }

  &::-webkit-input-placeholder {
    color: ${theme.color.neutral.B40};
  }
  &::-moz-placeholder {
    color: ${theme.color.neutral.B40};
    opacity: 1;
  }
  &:-ms-input-placeholder {
    color: ${theme.color.neutral.B40};
  }
`;
