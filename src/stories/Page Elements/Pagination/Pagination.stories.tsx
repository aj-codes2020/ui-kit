import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {Pagination} from '../../../components'; // Ensure the correct path to your Pagination component

interface PaginationPropsAndCustomArgs extends React.ComponentProps<typeof Pagination> {}

const meta: Meta<PaginationPropsAndCustomArgs> = {
  title: 'Components/Page Elements/Pagination',
  component: Pagination,
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={(page) => {
          setCurrentPage(page);
          args.onPageChange(page);
        }}
      />
    );
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    totalItems: { control: 'number' },
    itemsPerPage: { control: 'number' },
    currentPage: { control: 'number' },
    onPageChange: { action: 'changed' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<PaginationPropsAndCustomArgs>;

export const Default: Story = {
  args: {
    totalItems: 50,
    itemsPerPage: 10,
    currentPage: 1,
    className: '',
  },
};
