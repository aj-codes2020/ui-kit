import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {Card} from '../../../components'; // Ensure the correct path to your Card component

interface CardPropsAndCustomArgs extends React.ComponentProps<typeof Card> {}

const meta: Meta<CardPropsAndCustomArgs> = {
  title: 'Components/Page Elements/Card',
  component: Card,
  render: (args) => <Card {...args} />,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    header: { control: 'text' },
    footer: { control: 'text' },
    children: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<CardPropsAndCustomArgs>;

export const Default: Story = {
  args: {
    header: 'Card Header',
    children: 'This is the body of the card.',
    footer: 'Card Footer',
    className: '',
  },
};

export const WithoutHeader: Story = {
  args: {
    children: 'This card does not have a header.',
    footer: 'Card Footer',
    className: '',
  },
};

export const WithoutFooter: Story = {
  args: {
    header: 'Card Header',
    children: 'This card does not have a footer.',
    className: '',
  },
};

