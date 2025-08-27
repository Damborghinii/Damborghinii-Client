import styled from "@emotion/styled";
import theme from "@styles/theme";

const BADGE_TYPE = [
  "고수익 매물",
  "비교적 안전한",
  "단기상환",
  "장기상환",
  "스트리밍",
];

const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  gap: 8px;
  overflow-x: scroll;
  display: flex;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Badge = styled.div`
  min-width: 3rem;
  padding: 6px 12px;
  border-radius: 80px;
  border: 1px solid ${theme.color.neutral.B20};
  white-space: nowrap;
  flex-shrink: 0;

  color: ${theme.color.neutral.B40};
  ${theme.typography["small1-2"]}
`;

export const BadgeScroll = () => {
  return (
    <Container>
      {BADGE_TYPE.map((text, idx) => (
        <Badge key={idx}>{text}</Badge>
      ))}
    </Container>
  );
};
