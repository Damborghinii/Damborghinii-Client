import { RepaymentSchedule } from "@apis/adjustment";
import { cardImage } from "@assets/image";
import { HorizontalDivider } from "@components/common/horizontalDivider/HorizontalDivider";
import Spacer from "@components/common/spacer/Spacer";
import styled from "@emotion/styled";
import { RepaymentStatus } from "@pages/_hooks/useTabBar";
import theme from "@styles/theme";

interface TextProps {
  color?: string;
  size?: {
    fontSize: string;
    fontWeight: number;
  };
}

// export interface BottomSectionProp {
//   expectedMoney: string;
// }

interface BottomSectionProps {
  schedule: RepaymentSchedule;
  status: RepaymentStatus;
  onClick?: () => void;
}

export const BottomSection = ({
  schedule,
  status,
  onClick,
}: BottomSectionProps) => {
  const isOverdue = (repaymentDate: string): boolean => {
    const today = new Date();
    const repayDate = new Date(repaymentDate);

    // 시간 부분을 제거하고 날짜만 비교
    today.setHours(0, 0, 0, 0);
    repayDate.setHours(0, 0, 0, 0);

    return repayDate < today;
  };

  return (
    <CardWrapper onClick={onClick}>
      <NftCardWrapper>
        <img
          src={schedule.nftImageUrl || cardImage}
          alt="담보 카드"
          width={20}
          height={20}
          style={{
            borderRadius: "2px",
          }}
        />
        <NftText>{schedule.nftName}</NftText>
        {/* 내 지분<NftText>{schedule.ethPrice}</NftText> */}
      </NftCardWrapper>
      <Spacer height="0.5rem" />

      <RowTextWrapper>
        <SmallTitle
          color={theme.color.neutral.B50}
          // size={theme.typography["small1-3"]}
        >
          회차
        </SmallTitle>
        <SmallText
          color={
            status === "OVERDUE"
              ? theme.color.warning.R30
              : theme.color.primary.P60
          }
        >
          {schedule.round}회차
        </SmallText>
      </RowTextWrapper>

      <Spacer height="0.5rem" />
      <RowTextWrapper>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <SmallTitle
            color={theme.color.neutral.B50}
            // size={theme.typography["small1-3"]}
          >
            상환일
          </SmallTitle>
          <SmallText
            color={
              isOverdue(schedule.repaymentDate)
                ? theme.color.warning.R30
                : theme.color.primary.P60
            }
          >
            {schedule.relativeDays}
          </SmallText>
        </div>
        <SmallText
          color={
            isOverdue(schedule.repaymentDate)
              ? theme.color.warning.R30
              : theme.color.primary.P60
          }
        >
          {schedule.repaymentDate}
        </SmallText>
      </RowTextWrapper>

      <Spacer height="1rem" />
      <HorizontalDivider />
      <Spacer height="1rem" />

      <RowTextWrapper>
        <SmallTitle color={theme.color.neutral.B50}>상환액</SmallTitle>
        <SmallText color={theme.color.neutral.B40}>
          {schedule.repaymentAmount.toLocaleString()}원 / 연이율
          {schedule.interestRate}%
        </SmallText>
      </RowTextWrapper>
      {status === "OVERDUE" && (
        <>
          <RowTextWrapper>
            <SmallText color={theme.color.neutral.B40}>연체금</SmallText>
            <SmallText color={theme.color.neutral.B40}>
              {schedule.lateFee?.toLocaleString()}원 / 연체율
              {schedule.interestRate}%
            </SmallText>
          </RowTextWrapper>
        </>
      )}
      <Spacer height="0.5rem" />
      <RowTextWrapper>
        <BodyText color={theme.color.neutral.B70}>총 상환금액</BodyText>
        <BodyText
          color={
            isOverdue(schedule.repaymentDate)
              ? theme.color.warning.R30
              : status === "UPCOMING"
              ? theme.color.secondary.S60
              : theme.color.neutral.B70
          }
        >
          {schedule.totalRepaymentAmount.toLocaleString()}원
        </BodyText>
      </RowTextWrapper>
    </CardWrapper>
  );
};

const BodyText = styled.h2<TextProps>`
  padding-top: 0.1rem;
  ${({ theme }) => theme.typography["body2-2"]}
  color: ${({ color }) => color}
`;

const SmallText = styled.h3<TextProps>`
  ${({ theme }) => theme.typography["small1-2"]}
  color: ${({ color }) => color}
`;

const SmallTitle = styled.h3<TextProps>`
  ${({ theme }) => theme.typography["small1-3"]}
  color: ${({ color }) => color}
`;
const CardWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.neutral.white};

  border-radius: 1.5rem;
  padding: 1rem;
`;

const RowTextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NftCardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.625rem;
  background-color: ${({ theme }) => theme.color.neutral.B00};

  border-radius: 0.4rem;

  ${({ theme }) => theme.typography["small2-3"]}
  color: ${({ theme }) => theme.color.neutral.B40};
`;

const NftText = styled.h3<TextProps>`
  ${({ theme }) => theme.typography["small1-2"]}
  color: ${({ theme }) => theme.color.neutral.B70};
`;
