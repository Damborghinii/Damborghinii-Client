import styled from "@emotion/styled";
import Spacer from "@components/common/spacer/Spacer";
import { useState } from "react";

interface ButtonProps {
  disabled: boolean;
}

interface NoticeProps {
  onClick: () => void;
}

export const ConfirmNoticeSection = ({ onClick }: NoticeProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <NoticeWrapper>
      <Title>대출 진행 방식을 확인해 주세요.</Title>
      <NoticeList>
        <li>투자자를 통한 희망 대출금이 모두 모였을 경우 대출이 시작되어요.</li>
        <Spacer height="0.75rem" />
        <li>
          이후 대출이 시작된 날 기준으로 매달 상환을 진행해요. (상환일이 매달
          마지막 날(29,30,31)일 경우에는 매달 마지막 날로 통일하여 진행)
        </li>
        <Spacer height="0.75rem" />

        <li>
          마지막 회차에 남은 이자 및 원금을 모두 납부한 후 담보를 돌려받을 수
          있어요.
        </li>
        <Spacer height="0.75rem" />

        <li>
          정해진 이자상환일에 이자를 납부하지 않을 경우 연체율 5%로 매일 이자에
          연체금이 추가돼요.
        </li>
        <Spacer height="0.75rem" />

        <li>
          대출자가 정해진 상환일에 이자를 납부하지 않을 경우, 연체율 5%로 매일
          이자에 연체금이 추가되며 투자자의 지분대로 지급되어요.
        </li>
        <Spacer height="0.75rem" />

        <li>
          남은 이자 및 원금을 모두 납부하지 않을 경우 NFT담보는 경매로 넘어가요.
        </li>
      </NoticeList>
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
        대출 신청하기
      </Button>
    </NoticeWrapper>
  );
};

const Title = styled.h1`
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;

  ${({ theme }) => theme.typography["body1-1"]}
  color: ${({ theme }) => theme.color.neutral.B60};
`;

const NoticeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 1.875rem;
  gap: 2rem;
`;

const NoticeList = styled.ul`
  list-style: disc;
  padding-left: 1rem;

  & > li {
    color: ${({ theme }) => theme.color.neutral.B60};
    ${({ theme }) => theme.typography["small1-3"]};
  }
`;

const CheckBox = styled.input`
  width: 1rem;
  height: 1rem;
  border: 1px solid ${({ theme }) => theme.color.neutral.B20};
  border-radius: 0.2rem;
  appearance: none;
  cursor: pointer;
  position: relative; /* ⬅️ ::after 기준점 */

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
