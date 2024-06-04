import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { TextArea } from '../../../components'; // Ensure the correct path to your Textarea component

interface TextareaPropsAndCustomArgs extends React.ComponentProps<typeof TextArea> {}

const meta: Meta<TextareaPropsAndCustomArgs> = {
  title: 'Components/UI Elements/Text Area',
  component: TextArea,
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  parameters: {
    layout: 'centered', 
  },
  argTypes: {
    value: { control: 'text' },
    onChange: { action: 'changed' },
    placeholder: { control: 'text' },
    rows: { control: 'number' },
    cols: { control: 'number' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<TextareaPropsAndCustomArgs>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Enter text here...',
    rows: 4,
    cols: 50,
    className: '',
  },
};
