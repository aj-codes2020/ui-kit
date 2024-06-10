import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Table } from '../../../components';

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
   itemsPerPage: { control: 'number' },
   showFilter: { control: 'boolean' },
   showNavigation: { control: 'boolean' },
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
 { Name: 'Doe John', Age: '19', Country: 'USA' },
 { Name: 'Smith Anna', Age: '27', Country: 'UK' },
 { Name: 'Brown Paul', Age: '31', Country: 'Canada' },
];

export const Default: Story = {
 args: {
   columns,
   data,
   itemsPerPage: 3,
   showFilter: true,
   showNavigation: true,
   className: '',
 },
};
