import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {ProgressBar} from '../../../components'; // Ensure the correct path to your ProgressBar component

interface ProgressBarPropsAndCustomArgs extends React.ComponentProps<typeof ProgressBar> {}

const meta: Meta<ProgressBarPropsAndCustomArgs> = {
  title: 'Components/UI Elements/Progress Bar',
  component: ProgressBar,
  render: (args) => <ProgressBar {...args} />,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: { control: 'number' },
    max: { control: 'number' },
    type: { control: 'select', options: ['linear', 'circular'] },
    color: { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<ProgressBarPropsAndCustomArgs>;

export const LinearProgress: Story = {
  args: {
    value: 50,
    max: 100,
    type: 'linear',
    color: 'primary',
    size: 'medium',
    className: '',
  },
};

export const CircularProgress: Story = {
  args: {
    value: 75,
    max: 100,
    type: 'circular',
    color: 'success',
    size: 'large',
    className: '',
  },
};

export const SmallWarningProgress: Story = {
  args: {
    value: 30,
    max: 100,
    type: 'linear',
    color: 'warning',
    size: 'small',
    className: '',
  },
};

export const LargeDangerCircularProgress: Story = {
  args: {
    value: 90,
    max: 100,
    type: 'circular',
    color: 'danger',
    size: 'large',
    className: '',
  },
};
