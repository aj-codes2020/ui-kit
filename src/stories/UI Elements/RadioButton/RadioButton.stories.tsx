import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RadioGroup } from '../../../components'; // Ensure the correct path to your RadioGroup component

interface Option {
  label: string;
  value: string;
}

const options: Option[] = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

type RadioGroupPropsAndCustomArgs = React.ComponentProps<typeof RadioGroup>;

const meta: Meta<RadioGroupPropsAndCustomArgs> = {
  title: 'Components/UI Elements/Radio Button',
  component: RadioGroup,
  render: (args) => <RadioGroup {...args} />,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: { control: 'text' },
    options: { control: 'object' },
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<RadioGroupPropsAndCustomArgs>;

export const Default: Story = {
  args: {
    name: 'exampleGroup',
    options,
    onChange: (value: string) => {
      console.log(`Selected value: ${value}`);
    },
  },
};
