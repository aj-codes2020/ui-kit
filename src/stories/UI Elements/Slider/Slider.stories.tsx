import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Slider } from '../../../components'; // Ensure the correct path to your Slider component

interface SliderPropsAndCustomArgs extends React.ComponentProps<typeof Slider> {}

const meta: Meta<SliderPropsAndCustomArgs> = {
  title: 'Components/UI Elements/Slider',
  component: Slider,
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <Slider {...args} value={value} onChange={setValue} />;
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    value: { control: 'number' },
    onChange: { action: 'changed' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<SliderPropsAndCustomArgs>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    className: '',
  },
};
