import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Common/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryEnabled: Story = {
  args: {
    text: "대출 신청",
    variant: "secondary",
    size: "small",
  },
};

export const PrimaryDisabled: Story = {
  args: {
    text: "다음",
    variant: "primary",
    size: "big",
  },
};

export const LinePrimarySmall: Story = {
  args: {
    text: "삭제",
    variant: "line-primary",
    size: "small",
  },
};

export const SecondaryMedium: Story = {
  args: {
    text: "취소",
    variant: "secondary",
    size: "medium",
  },
};

export const LineSecondaryDisabled: Story = {
  args: {
    text: "닫기",
    variant: "line-secondary",
    size: "medium",
    disabled: true,
  },
};
