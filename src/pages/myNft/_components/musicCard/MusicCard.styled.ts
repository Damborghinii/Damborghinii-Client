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
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  color: ${({ theme }) => theme.color.neutral.B70};
  ${({ theme }) => theme.typography["body2-2"]};
`;
