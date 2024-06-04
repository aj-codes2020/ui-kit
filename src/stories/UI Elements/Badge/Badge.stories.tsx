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
    type: { control: 'select', options: ['status', 'counter'] },
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
    type: 'status',
    color: 'default',
    size: 'medium',
    className: '',
  },
};

export const PrimaryCounter: Story = {
  args: {
    children: 'primary',
    type: 'counter',
    color: 'primary',
    size: 'medium',
    className: '',
  },
};

export const SuccessStatus: Story = {
  args: {
    children: 'Success',
    type: 'status',
    color: 'success',
    size: 'medium',
    className: '',
  },
};

export const WarningCounter: Story = {
  args: {
    children: 'Warning',
    type: 'counter',
    color: 'warning',
    size: 'large',
    className: '',
  },
};

export const DangerStatus: Story = {
  args: {
    children: 'Danger',
    type: 'status',
    color: 'danger',
    size: 'small',
    className: '',
  },
};
