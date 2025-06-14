import styled from "@emotion/styled";

interface HorizontalDividerProps {
  width?: string;
  height?: string;
  color?: string;
}

export const HorizontalDivider = ({
  width = "100%",
  height = "2px",
  color,
}: HorizontalDividerProps) => {
  return <Line width={width} height={height} color={color} />;
};

const Line = styled.div<HorizontalDividerProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ theme, color }) =>
    color ? color : theme.color.neutral.B00};
`;
