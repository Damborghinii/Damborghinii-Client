import styled from "@emotion/styled";
import theme from "@styles/theme";
import { useState } from "react";

interface ButtonProps {
  disabled: boolean;
}

interface NoticeProps {
  onClick: () => void;
}

const notices: { title: string; sub?: string }[] = [
  {
    title:
      "투자 시작일로부터 한 달 이내에 투자자를 통해 희망 대출금이 모두 모일 경우 실제 대출이 자동으로 시작되어요.",
    sub: "*한 달 이내에 희망 대출금이 모이지 않을 경우, 혹은 차입자에 의해 대출 신청이 취소될 경우 작성한 투자 신청건과 계약서는 삭제 처리",
  },
  {
    title: "대출이 시작된 날 기준, 한 달 간격으로 매달 상환을 진행해요.",
    sub: "*대출 시작일이 매달 마지막 날(29,30,31)인 경우에는 매달 마지막 날 상환 진행",
  },
  {
    title:
      "정해진 상환일에 이자를 납부하지 않을 경우, 연체율 기준으로 매일 연체금이 추가돼요.",
  },
  {
    title:
      "마지막 회차에 남은 이자 및 원금을 모두 납부한 후 담보를 돌려받을 수 있어요.",
  },
  {
    title:
      "남은 이자 및 원금을 모두 납부하지 않을 경우 NFT 담보는 경매로 넘어가요.",
  },
];

export const ConfirmNoticeSection = ({ onClick }: NoticeProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <NoticeWrapper>
      <Title>대출 진행 방식을 확인해 주세요.</Title>
      <NoticeGroups>
        {notices.map(({ title, sub }, idx) => (
          <NoticeGroup key={idx}>
            <GroupTitle>{title}</GroupTitle>
            {sub && <GroupSub>{sub}</GroupSub>}
            {idx !== notices.length - 1 && <Divider />}
          </NoticeGroup>
        ))}
      </NoticeGroups>
      <CheckWrapper>
        <CheckBox
          type="checkbox"
          id="confirmCheck"
          checked={checked}
          onChange={() => setChecked((prev) => !prev)}
        />
        <CheckLabel htmlFor="confirmCheck">
          위 내용을 모두 확인했습니다.
        </CheckLabel>
      </CheckWrapper>
      <Button disabled={!checked} onClick={onClick}>
        계약 작성
      </Button>
    </NoticeWrapper>
  );
};

const Title = styled.h1`
  width: 100%;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.typography["body1-1"]}
  color: ${({ theme }) => theme.color.neutral.B60};
`;

const NoticeGroups = styled.div`
  display: flex;
  flex-direction: column;
`;

const NoticeGroup = styled.section`
  display: flex;
  flex-direction: column;
`;

const GroupTitle = styled.p`
  ${({ theme }) => theme.typography["body2-2"]};
  color: ${({ theme }) => theme.color.neutral.B60};
`;

const GroupSub = styled.p`
  ${({ theme }) => theme.typography["small1-3"]};
  color: ${({ theme }) => theme.color.neutral.B60};
`;

const Divider = styled.div`
  width: 2px;
  height: 24px;
  margin: 0.5rem 0;
  background: ${({ theme }) => theme.color.neutral.B20};
`;

const NoticeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 1.875rem;
  gap: 2rem;
  background-color: ${theme.color.neutral.B00};
`;

const CheckBox = styled.input`
  width: 1rem;
  height: 1rem;
  border: 1px solid ${({ theme }) => theme.color.neutral.B20};
  border-radius: 0.2rem;
  appearance: none;
  cursor: pointer;
  position: relative;

  &:checked {
    background-color: ${({ theme }) => theme.color.primary.P50};
    border-color: ${({ theme }) => theme.color.primary.P50};
  }

  &:checked::after {
    content: "✔";

    position: absolute; /* ⬅️ 위치 제어 */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.5rem;
    color: white;
  }
`;

const CheckLabel = styled.label`
  ${({ theme }) => theme.typography["body1-2"]};
  color: ${({ theme }) => theme.color.neutral.B70};
  cursor: pointer;
`;

const Button = styled.button<ButtonProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.neutral.B30 : theme.color.neutral.B50};
  border-radius: 0.25rem;

  ${({ theme }) => theme.typography["body1-2"]}
  color: ${({ theme }) => theme.color.neutral.white};

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s ease-in-out;
`;

const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
