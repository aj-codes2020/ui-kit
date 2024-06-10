import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {Badge} from '../../../components'; // Ensure the correct path to your Badge component

interface BadgePropsAndCustomArgs extends React.ComponentProps<typeof Badge> {}

const meta: Meta<BadgePropsAndCustomArgs> = {
  title: 'Components/UI Elements/Badge',
  component: Badge,
  render: (args) => <Badge {...args}>{args.children}</Badge>,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
    color: { control: 'select', options: ['default', 'primary', 'success', 'warning', 'danger'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<BadgePropsAndCustomArgs>;

export const Default: Story = {
  args: {
    children: 'Default',
    color: 'default',
    size: 'large',
    className: '',
  },
};

export const PrimaryCounter: Story = {
  args: {
    children: 'primary',
    color: 'primary',
    size: 'large',
    className: '',
  },
};

export const SuccessStatus: Story = {
  args: {
    children: 'Success',
    color: 'success',
    size: 'large',
    className: '',
  },
};

export const WarningCounter: Story = {
  args: {
    children: 'Warning',
    color: 'warning',
    size: 'large',
    className: '',
  },
};

export const DangerStatus: Story = {
  args: {
    children: 'Danger',
    color: 'danger',
    size: 'large',
    className: '',
  },
};
