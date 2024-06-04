import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {Table} from '../../../components'; // Ensure the correct path to your Table component

interface TablePropsAndCustomArgs extends React.ComponentProps<typeof Table> {}

const meta: Meta<TablePropsAndCustomArgs> = {
  title: 'Components/Page Elements/Table',
  component: Table,
  render: (args) => <Table {...args} />,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    columns: { control: 'object' },
    data: { control: 'object' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<TablePropsAndCustomArgs>;

const columns = ['Name', 'Age', 'Country'];
const data = [
  { Name: 'John Doe', Age: '28', Country: 'USA' },
  { Name: 'Anna Smith', Age: '22', Country: 'UK' },
  { Name: 'Paul Brown', Age: '35', Country: 'Canada' },
  // Add more sample data as needed
];

export const Default: Story = {
  args: {
    columns,
    data,
    className: '',
  },
};
