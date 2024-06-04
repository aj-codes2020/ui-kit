import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {Popover} from '../../../components'; // Ensure the correct path to your Popover component

interface PopoverPropsAndCustomArgs extends React.ComponentProps<typeof Popover> {}

const meta: Meta<PopoverPropsAndCustomArgs> = {
  title: 'Components/UI Elements/Popover',
  component: Popover,
  render: (args) => (
    <Popover {...args}>
      <button>Click me</button>
    </Popover>
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

type Story = StoryObj<PopoverPropsAndCustomArgs>;

export const Default: Story = {
  args: {
    content: 'This is a popover',
    position: 'bottom',
    className: '',
  },
};

export const CustomContent: Story = {
  args: {
    content: (
      <div>
        <h4>Popover Title</h4>
        <p>This is some custom content in the popover.</p>
      </div>
    ),
    position: 'right',
    className: '',
  },
};
