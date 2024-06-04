import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Input } from '../../../components'; // Ensure the correct path to your Input component

interface InputPropsAndCustomArgs extends React.ComponentProps<typeof Input> {}

const meta: Meta<InputPropsAndCustomArgs> = {
  title: 'Components/UI Elements/Input',
  component: Input,
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <Input {...args} value={value} onChange={setValue} />;
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'password', 'number'] },
    value: { control: 'text' },
    onChange: { action: 'changed' },
    placeholder: { control: 'text' },
    className: { control: 'text' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<InputPropsAndCustomArgs>;

export const TextInput: Story = {
  args: {
    type: 'text',
    value: '',
    placeholder: 'Enter text...',
    className: '',
  },
};

export const EmailInput: Story = {
  args: {
    type: 'email',
    value: '',
    placeholder: 'Enter email...',
    className: '',
  },
};

export const PasswordInput: Story = {
  args: {
    type: 'password',
    value: '',
    placeholder: 'Enter password...',
    className: '',
  },
};

export const NumberInput: Story = {
  args: {
    type: 'number',
    value: '',
    placeholder: 'Enter number...',
    className: '',
    min: 0,
    max: 100,
    step: 1,
  },
};
