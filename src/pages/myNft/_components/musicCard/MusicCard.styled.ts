import styled from "@emotion/styled";

export const CardContainer = styled.div`
  width: 100%;
  padding: 20px 22px;

  display: flex;
  align-items: center;

  gap: 10px;
`;

export const CardInfoWrapper = styled.div`
  display: flex;
  height: 64px;

  flex: 1;
  flex-direction: column;
  justify-content: space-around;

  color: ${({ theme }) => theme.color.neutral.B70};
  ${({ theme }) => theme.typography["body2-2"]};
`;

export const StatusTextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatusText = styled.h2`
  color: ${({ theme }) => theme.color.neutral.B60};
  ${({ theme }) => theme.typography["small1-2"]};
`;
