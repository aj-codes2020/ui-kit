import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {Spinner} from '../../../components'; // Ensure the correct path to your Spinner component

interface SpinnerPropsAndCustomArgs extends React.ComponentProps<typeof Spinner> {}

const meta: Meta<SpinnerPropsAndCustomArgs> = {
  title: 'Components/UI Elements/Spinner',
  component: Spinner,
  render: (args) => <Spinner {...args} />,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    color: { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger'] },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<SpinnerPropsAndCustomArgs>;

export const Default: Story = {
  args: {
    size: 'medium',
    color: 'primary',
    className: '',
  },
};

export const SmallSecondary: Story = {
  args: {
    size: 'small',
    color: 'secondary',
    className: '',
  },
};

export const LargeSuccess: Story = {
  args: {
    size: 'large',
    color: 'success',
    className: '',
  },
};

export const WarningSpinner: Story = {
  args: {
    size: 'medium',
    color: 'warning',
    className: '',
  },
};

export const DangerSpinner: Story = {
  args: {
    size: 'medium',
    color: 'danger',
    className: '',
  },
};
