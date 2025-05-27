import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import BottomSheet, { Option } from "./BottomSheet";

type BottomSheetProps = React.ComponentProps<typeof BottomSheet>;

const MY_OPTIONS: Option[] = [
  { value: "latest", label: "최신순" },
  { value: "value", label: "높은 가치 순" },
  { value: "art", label: "아트 NFT만 보기" },
];

const meta: Meta<BottomSheetProps> = {
  title: "Common/BottomSheet",
  component: BottomSheet,
  argTypes: {
    title: { control: "text" },
    options: { control: false },
    selected: { control: "text" },
    onSelect: { action: "onSelect" },
    onClose: { action: "onClose" },
  },
};

export default meta;

type Story = StoryObj<BottomSheetProps>;

export const Static: Story = {
  args: {
    title: "정렬순서",
    options: MY_OPTIONS,
    selected: "latest",
    onSelect: action("onSelect"),
    onClose: action("onClose"),
  },
};

const InteractiveTemplate: React.FC<BottomSheetProps> = ({
  title,
  options,
  selected,
}) => {
  const [open, setOpen] = useState(true);
  const [sel, setSel] = useState<string>(selected);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open BottomSheet</button>
      {open && (
        <BottomSheet
          title={title}
          options={options}
          selected={sel}
          onSelect={(value) => {
            action("onSelect")(value);
            setSel(value);
            setOpen(false);
          }}
          onClose={() => {
            action("onClose")();
            setOpen(false);
          }}
        />
      )}
    </>
  );
};

export const Interactive: Story = {
  render: (args) => <InteractiveTemplate {...args} />,
  args: {
    title: "정렬순서",
    options: MY_OPTIONS,
    selected: "latest",
  },
};
