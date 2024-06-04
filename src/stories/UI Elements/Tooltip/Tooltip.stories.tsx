import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {Tooltip , Button} from '../../../components'; // Ensure the correct path to your Tooltip component

interface TooltipPropsAndCustomArgs extends React.ComponentProps<typeof Tooltip> {}

const meta: Meta<TooltipPropsAndCustomArgs> = {
  title: 'Components/UI Elements/Tooltip',
  component: Tooltip,
  render: (args) => (
    <Tooltip {...args}>
        <Button label="Hover Over Me" onClick={() => {}} primary/>
    </Tooltip>
  ),
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    content: { control: 'text' },
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<TooltipPropsAndCustomArgs>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    position: 'top',
    className: '',
  },
};
