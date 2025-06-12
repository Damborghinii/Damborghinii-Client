import styled from "@emotion/styled";

interface FlexProps {
  gap?: string;
}

interface SmallTextProps {
  isBlack?: boolean;
}

export const MyNftWrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100dvh;
  background-color: ${({ theme }) => theme.color.neutral.white};
`;

export const EntryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  width: 100%;
  background-color: ${({ theme }) => theme.color.neutral.B00};

  padding-bottom: 2rem;
`;

export const NftCardContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 0 1.25rem;
`;

export const ColumnFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-grow: 1;
  gap: ${({ gap }) => gap || "0"};
`;

export const RowFlex = styled.div<FlexProps>`
  width: 100%;

  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap || "0"};
`;

export const CardTitle = styled.h1`
  ${({ theme }) => theme.typography["body2-2"]}
  color: ${({ theme }) => theme.color.neutral.B70};
`;

export const SmallText = styled.h2<SmallTextProps>`
  ${({ theme }) => theme.typography["small1-3"]}
  color: ${({ theme, isBlack }) =>
    isBlack ? theme.color.neutral.B70 : theme.color.neutral.B40};
`;
