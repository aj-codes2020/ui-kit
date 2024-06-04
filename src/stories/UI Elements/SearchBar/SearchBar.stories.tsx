import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {SearchBar} from '../../../components'; // Ensure the correct path to your SearchBar component

interface SearchBarPropsAndCustomArgs extends React.ComponentProps<typeof SearchBar> {}

const meta: Meta<SearchBarPropsAndCustomArgs> = {
    title: 'Components/UI Elements/Search Bar',
  component: SearchBar,
  render: (args) => {
    const [, setSearchQuery] = useState('');
    const handleSearch = (query: string) => {
      setSearchQuery(query);
    };
    return <SearchBar {...args} onSearch={handleSearch} />;
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    suggestions: { control: {type: 'select'} },
    placeholder: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<SearchBarPropsAndCustomArgs>;

const suggestions = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
];

export const Default: Story = {
  args: {
    suggestions,
    placeholder: 'Search for a fruit...',
    className: '',
  },
};
