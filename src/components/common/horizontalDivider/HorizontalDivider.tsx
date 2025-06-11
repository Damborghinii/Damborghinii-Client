import styled from "@emotion/styled";

interface HorizontalDividerProps {
  width?: string;
  height?: string;
}

export const HorizontalDivider = ({
  width = "100%",
  height = "2px",
}: HorizontalDividerProps) => {
  return <Line width={width} height={height} />;
};

const Line = styled.div<HorizontalDividerProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ theme }) => theme.color.neutral.B00};
`;
