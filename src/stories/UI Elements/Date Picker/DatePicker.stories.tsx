import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { DatePicker } from '../../../components'; // Ensure the correct path to your DatePicker component

interface DatePickerPropsAndCustomArgs extends React.ComponentProps<typeof DatePicker> {}

const meta: Meta<DatePickerPropsAndCustomArgs> = {
  title: 'Components/UI Elements/Date Picker',
  component: DatePicker,
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(args.selected);
    return <DatePicker {...args} selected={selectedDate} onChange={setSelectedDate} />;
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    selected: { control: 'date' },
    onChange: { action: 'changed' },
    showTimeSelect: { control: 'boolean' },
    dateFormat: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<DatePickerPropsAndCustomArgs>;

export const Default: Story = {
  args: {
    selected: new Date(),
    showTimeSelect: false,
    dateFormat: 'MM/dd/yyyy',
    className: '',
  },
};

export const DateTimePicker: Story = {
  args: {
    selected: new Date(),
    showTimeSelect: true,
    dateFormat: 'MM/dd/yyyy h:mm aa',
    className: '',
  },
};
