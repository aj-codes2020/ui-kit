import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Select } from '../../../components'; 

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
];

type SelectPropsAndCustomArgs = React.ComponentProps<typeof Select>;

const meta: Meta<SelectPropsAndCustomArgs> = {
  title: 'Components/UI Elements/Select',
  component: Select,
  render: (args) => <Select {...args} />,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    options: { control: 'object' },
    isMulti: { control: 'boolean' },
    placeholder: { control: 'text' },
    onChange: { action: 'changed' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<SelectPropsAndCustomArgs>;

export const SingleSelect: Story = {
  args: {
    options,
    isMulti: false,
    placeholder: 'Select a fruit...',
    className: '',
  },
};

export const MultiSelect: Story = {
  args: {
    options,
    isMulti: true,
    placeholder: 'Select fruits...',
    className: '',
  },
};
