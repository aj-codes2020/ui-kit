import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {Rating} from '../../../components'; // Ensure the correct path to your Rating component

interface RatingPropsAndCustomArgs extends React.ComponentProps<typeof Rating> {}

const meta: Meta<RatingPropsAndCustomArgs> = {
    title: 'Components/UI Elements/Rating',
  component: Rating,
  render: (args) => {
    const [rating, setRating] = useState(args.value || 0);
    return <Rating {...args} value={rating} onChange={setRating} />;
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    maxRating: { control: 'number' },
    value: { control: 'number' },
    onChange: { action: 'changed' },
    className: { control: 'text' },
    readOnly: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<RatingPropsAndCustomArgs>;

export const Default: Story = {
  args: {
    maxRating: 5,
    value: 3,
    className: '',
    readOnly: false,
  },
};

export const ReadOnly: Story = {
  args: {
    maxRating: 5,
    value: 4,
    className: '',
    readOnly: true,
  },
};

export const CustomMaxRating: Story = {
  args: {
    maxRating: 10,
    value: 7,
    className: '',
    readOnly: false,
  },
};
