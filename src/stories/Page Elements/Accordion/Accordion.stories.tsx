import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {Accordion} from '../../../components'; // Ensure the correct path to your Accordion component


interface AccordionPropsAndCustomArgs extends React.ComponentProps<typeof Accordion> {}

const meta: Meta<AccordionPropsAndCustomArgs> = {
  title: 'Components/Page Elements/Accordion',
  component: Accordion,
  render: (args) => <Accordion {...args} />,
  parameters: {
    layout: 'fullscreen',
  },

  argTypes: {
    items: { control: 'object' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<AccordionPropsAndCustomArgs>;

const items = [
  { title: 'Section 1', content: 'Content for section 1'},
  { title: 'Section 2', content: 'Content for section 2' },
  { title: 'Section 3', content: 'Content for section 3' },
];

export const Default: Story = {
  args: {
    items,
    className: '',
  },
};
