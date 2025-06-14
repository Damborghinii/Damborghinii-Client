import {
  useTabBar,
  ADJ_STATUS,
  RepaymentStatus,
} from "@pages/_hooks/useTabBar";

import styled from "@emotion/styled";

interface TitleProps {
  active: boolean;
}

export const AdjustmentTab: React.FC = () => {
  const { status, setStatus } = useTabBar();
  return (
    <StatusListWrapper>
      {Object.entries(ADJ_STATUS).map(([key, label]) => (
        <StatusTab
          key={key}
          active={key === status}
          onClick={() => setStatus(key as RepaymentStatus)}
        >
          {label}
        </StatusTab>
      ))}
    </StatusListWrapper>
  );
};

const StatusListWrapper = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.75rem;
  border-bottom: 2px solid ${({ theme }) => theme.color.neutral.B10};
`;

const StatusTab = styled.h2<TitleProps>`
  ${({ active, theme }) =>
    active ? theme.typography["body1-1"] : theme.typography["body1-2"]};
  padding: 0.5rem 0;
  margin-bottom: -2.25px;
  color: ${({ active, theme }) =>
    active ? theme.color.neutral.B70 : theme.color.neutral.B40};
  border-bottom: ${({ active, theme }) =>
    active ? `3px solid ${theme.color.neutral.B70}` : `3px solid transparent`};
  cursor: pointer;
`;
