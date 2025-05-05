// Title.stories.tsx

import { Meta, StoryObj } from "@storybook/react";
import { Title, TitleProps } from "./Title";

const meta: Meta<typeof Title> = {
  title: "Test/Title",
  component: Title,
  argTypes: {
    title: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<TitleProps>;

export const MTitle: Story = {
  args: {
    title: "my",
  },
};

export const DTitle: Story = {
  args: {
    title: "d",
  },
};
