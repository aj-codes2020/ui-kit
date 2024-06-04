import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {Tabs} from '../../../components'; // Ensure the correct path to your Tabs component

interface TabsPropsAndCustomArgs extends React.ComponentProps<typeof Tabs> {}

const meta: Meta<TabsPropsAndCustomArgs> = {
  title: 'Components/Page Elements/Tabs',
  component: Tabs,
  render: (args) => <Tabs {...args} />,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    tabs: { control: 'object' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<TabsPropsAndCustomArgs>;

const tabs = [
  { label: 'Tab 1', content: 'Content for tab 1' },
  { label: 'Tab 2', content: 'Content for tab 2' },
  { label: 'Tab 3', content: 'Content for tab 3' },
];

export const Default: Story = {
  args: {
    tabs,
    className: '',
  },
};
