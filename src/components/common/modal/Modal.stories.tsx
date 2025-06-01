import { Meta, StoryObj } from "@storybook/react/*";
import { MainModal } from "./Modal";
import { ThemeProvider } from "@emotion/react";
import { Preview } from "@storybook/react";
import theme from "../../../styles/theme";

const meta: Meta<typeof MainModal> = {
  title: "Common/Modal",

  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: MainModal,
  argTypes: {
    title: { control: "text" },
    sub: { control: "text" },
    primaryButton: {
      table: { type: { summary: "ButtonProps" } },
      control: "object",
      description: "우측 버튼(중요도가 높음)에 대한 속성입니다.",
    },
    secondButton: {
      table: { type: { summary: "ButtonProps" } },
      control: "object",
      description: "좌측 버튼(중요도가 낮음)에 대한 속성입니다.",
    },
  },
};

type Story = StoryObj<typeof MainModal>;

export const DeleteModal: Story = {
  render: (args) => <MainModal {...args} />,
  args: {
    title: "NFT를 삭제하시겠어요?",
    sub: "삭제된 NFT는 복구가 불가능합니다.",
    primaryButton: {
      children: "취소",
      onClick: () => {
        alert("취소");
      },
    },
    secondButton: {
      children: "확인",
      onClick: () => {
        alert("확인");
      },
    },
  },
};

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
