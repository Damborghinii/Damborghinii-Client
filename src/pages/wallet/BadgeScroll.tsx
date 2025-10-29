import styled from "@emotion/styled";
import theme from "@styles/theme";

// 배지 타입과 필터 매핑
const BADGE_CONFIG = [
  { label: "전체", key: 0 },
  { label: "출금", key: 1 },
  { label: "입금", key: 2 },
  { label: "충전", key: 3 },
  { label: "인출", key: 4 },
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

const Badge = styled.div<{ isActive: boolean }>`
  min-width: 3rem;
  padding: 6px 12px;
  border-radius: 80px;
  border: 1px solid
    ${(props) =>
      props.isActive ? theme.color.neutral.B50 : theme.color.neutral.B20};
  white-space: nowrap;
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.2s ease;

  color: ${(props) => (props.isActive ? "white" : theme.color.neutral.B40)};
  background-color: ${(props) =>
    props.isActive ? theme.color.neutral.B60 : "transparent"};
  ${theme.typography["small1-2"]}
`;

type BadgeScrollProps = {
  selectedKey: number;
  onKeyChange: (key: number) => void;
};

export const BadgeScroll = ({ selectedKey, onKeyChange }: BadgeScrollProps) => {
  return (
    <Container>
      {BADGE_CONFIG.map((badge) => (
        <Badge
          key={badge.key}
          isActive={selectedKey === badge.key}
          onClick={() => onKeyChange(badge.key)}
        >
          {badge.label}
        </Badge>
      ))}
    </Container>
  );
};
