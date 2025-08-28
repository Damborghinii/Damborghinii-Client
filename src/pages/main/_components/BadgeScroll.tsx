import styled from "@emotion/styled";
import theme from "@styles/theme";
import { SearchFilter } from "@apis/getMain";

// 배지 타입과 필터 매핑
const BADGE_CONFIG = [
  { label: "전체", filter: SearchFilter.ALL },
  { label: "고수익 매물", filter: SearchFilter.HIGH_RETURN },
  { label: "비교적 안전한", filter: SearchFilter.LOW_RISK },
  { label: "단기상환", filter: SearchFilter.SHORT_TERM },
  { label: "장기상환", filter: SearchFilter.LONG_TERM },
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
  selectedFilter: SearchFilter;
  onFilterChange: (filter: SearchFilter) => void;
};

export const BadgeScroll = ({
  selectedFilter,
  onFilterChange,
}: BadgeScrollProps) => {
  return (
    <Container>
      {BADGE_CONFIG.map((badge, idx) => (
        <Badge
          key={idx}
          isActive={selectedFilter === badge.filter}
          onClick={() => onFilterChange(badge.filter)}
        >
          {badge.label}
        </Badge>
      ))}
    </Container>
  );
};
