import { RepaymentSchedule } from "@apis/adjustment";
import { cardImage } from "@assets/image";
import { HorizontalDivider } from "@components/common/horizontalDivider/HorizontalDivider";
import Spacer from "@components/common/spacer/Spacer";
import styled from "@emotion/styled";
import { RepaymentStatus } from "@pages/_hooks/useTabBar";
import theme from "@styles/theme";

interface TextProps {
  color?: string;
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
  return (
    <CardWrapper onClick={onClick}>
      <RowTextWrapper>
        <BodyText color={theme.color.neutral.B70}>총 상환금액</BodyText>
        <BodyText color={theme.color.neutral.B70}>
          {schedule.totalRepaymentAmount.toLocaleString()}원
        </BodyText>
      </RowTextWrapper>
      <Spacer height="0.625rem" />
      <RowTextWrapper>
        <SmallText color={theme.color.neutral.B40}>상환액</SmallText>
        <SmallText color={theme.color.neutral.B40}>
          {schedule.repaymentAmount.toLocaleString()}원 / 연이율
          {schedule.interestRate}%
        </SmallText>
      </RowTextWrapper>
      <Spacer height="0.625rem" />
      {status === "OVERDUE" && (
        <>
          <RowTextWrapper>
            <SmallText color={theme.color.neutral.B40}>연체금</SmallText>
            <SmallText color={theme.color.neutral.B40}>
              {schedule.lateFee?.toLocaleString()}원 / 연체율
              {schedule.interestRate}%
            </SmallText>
          </RowTextWrapper>
          <Spacer height="0.625rem" />
        </>
      )}
      <HorizontalDivider />
      <Spacer height="0.625rem" />
      <RowTextWrapper>
        <SmallText color={theme.color.neutral.B70}>회차</SmallText>
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
      <Spacer height="0.625rem" />
      <RowTextWrapper>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <SmallText color={theme.color.neutral.B70}>상환일</SmallText>
          <SmallText
            color={
              status === "OVERDUE"
                ? theme.color.warning.R30
                : theme.color.primary.P60
            }
          >
            {schedule.relativeDays}
          </SmallText>
        </div>
        <SmallText
          color={
            status === "OVERDUE"
              ? theme.color.warning.R30
              : theme.color.primary.P60
          }
        >
          {schedule.repaymentDate}
        </SmallText>
      </RowTextWrapper>
      <Spacer height="0.625rem" />
      <NftCardWrapper>
        <img
          src={schedule.nftImageUrl || cardImage}
          alt="담보 카드"
          width={16}
          height={16}
        />
        담보
        <NftText>{schedule.nftName}</NftText>
        {/* 내 지분<NftText>{schedule.ethPrice}</NftText> */}
      </NftCardWrapper>
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

const CardWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.neutral.white};

  border-radius: 1rem;
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
  ${({ theme }) => theme.typography["small2-2"]}
  color: ${({ theme }) => theme.color.neutral.B70};
`;
