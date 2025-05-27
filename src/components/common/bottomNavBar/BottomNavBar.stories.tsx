// src/components/common/bottomNavBar/BottomNavBar.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import BottomNavBar from "./BottomNavBar";

const meta: Meta<typeof BottomNavBar> = {
  title: "Common/BottomNavBar",
  component: BottomNavBar,
  decorators: [
    (Story, context) => {
      const initialPath = context.parameters.initialPath ?? "/investment";
      return (
        <MemoryRouter initialEntries={[initialPath]}>
          <Story />
        </MemoryRouter>
      );
    },
  ],
  parameters: {
    initialPath: "/investment",
  },
};

export default meta;
type Story = StoryObj<typeof BottomNavBar>;

export const InvestmentTab: Story = {};

export const MyNftTab: Story = {
  parameters: { initialPath: "/myNft" },
};

export const ContractTab: Story = {
  parameters: { initialPath: "/contract" },
};

export const AdjustmentTab: Story = {
  parameters: { initialPath: "/adjustment" },
};
