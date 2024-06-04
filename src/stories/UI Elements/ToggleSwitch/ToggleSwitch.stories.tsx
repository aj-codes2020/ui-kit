import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {ToggleSwitch} from '../../../components';

type ToggleSwitchPropsAndCustomArgs = React.ComponentProps<typeof ToggleSwitch>;

const meta: Meta<ToggleSwitchPropsAndCustomArgs> = {
    title: 'Components/UI Elements/Toggle Switch',
  component: ToggleSwitch,
  render: (args) => <ToggleSwitch {...args} />,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onToggle: { action: 'toggled' },
    initialState: { control: 'boolean' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<ToggleSwitchPropsAndCustomArgs>;

export const Default: Story = {
  args: {
    initialState: false,
    className: '',
  },
};
