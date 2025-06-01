import styled from "@emotion/styled";

export const ModalContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;
  padding: 1.25rem;
  min-width: 21rem;

  border-radius: 0.75rem;

  background-color: ${({ theme }) => theme.color.neutral.white};
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

export const ModalTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0 0.25rem;
  justify-content: center;
  align-items: center;
`;

export const ModalTextTitle = styled.h1`
  ${({ theme }) => theme.typography["body1-1"]}
  color: ${({ theme }) => theme.color.neutral.B70};
`;

export const ModalTextSub = styled.span`
  white-space: pre-line;

  ${({ theme }) => theme.typography["small1-3"]}

  color: ${({ theme }) => theme.color.neutral.B60};
`;

export const ModalButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin-top: 2rem;
`;
