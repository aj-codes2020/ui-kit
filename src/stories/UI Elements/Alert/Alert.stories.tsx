import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {Alert} from '../../../components'; // Ensure the correct path to your Alert component

interface AlertPropsAndCustomArgs extends React.ComponentProps<typeof Alert> {}

const meta: Meta<AlertPropsAndCustomArgs> = {
  title: 'Components/UI Elements/Alert',
  component: Alert,
  render: (args) => <Alert {...args} />, 
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
    message: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<AlertPropsAndCustomArgs>;

export const Informational: Story = {
  args: {
    type: 'info',
    message: 'This is an informational alert',
    className: '',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    message: 'This is a success alert',
    className: '',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    message: 'This is a warning alert',
    className: '',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    message: 'This is an error alert',
    className: '',
  },
};
