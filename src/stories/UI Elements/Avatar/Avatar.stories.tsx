import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {Avatar} from '../../../components'; // Ensure the correct path to your Avatar component

interface AvatarPropsAndCustomArgs extends React.ComponentProps<typeof Avatar> {}

const meta: Meta<AvatarPropsAndCustomArgs> = {
  title: 'Components/UI Elements/Avatar',
  component: Avatar,
  render: (args) => <Avatar {...args} />,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    shape: { control: 'select', options: ['circle', 'square'] },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<AvatarPropsAndCustomArgs>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    alt: 'User Avatar',
    size: 'medium',
    shape: 'circle',
    className: '',
  },
};

export const Square: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    alt: 'User Avatar',
    size: 'medium',
    shape: 'square',
    className: '',
  },
};

export const LargeCircle: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    alt: 'User Avatar',
    size: 'large',
    shape: 'circle',
    className: '',
  },
};
