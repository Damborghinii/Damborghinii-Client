import { Meta, StoryObj } from "@storybook/react";
import StatusChip from "./StatusChip";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../styles/theme";

const meta: Meta<typeof StatusChip> = {
  title: "Components/StatusChip",
  component: StatusChip,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    size: {
      control: "radio",
      options: ["small", "big"],
    },
    variant: {
      control: "radio",
      options: ["neutral", "secondary", "warning"],
    },
    padding: {
      control: "text",
    },
    as: {
      control: "text",
      description: "HTML 태그 또는 커스텀 컴포넌트",
    },
    children: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatusChip>;

export const Default: Story = {
  args: {
    children: "기본 상태",
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <StatusChip variant="neutral">Neutral</StatusChip>
      <StatusChip variant="secondary">Secondary</StatusChip>
      <StatusChip variant="warning">Warning</StatusChip>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <StatusChip size="small">Small</StatusChip>
      <StatusChip size="big">Big</StatusChip>
    </div>
  ),
};
