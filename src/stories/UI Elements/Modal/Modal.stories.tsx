import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {Modal} from '../../../components'; // Ensure the correct path to your Modal component

interface ModalPropsAndCustomArgs extends React.ComponentProps<typeof Modal> {}

const meta: Meta<ModalPropsAndCustomArgs> = {
  title: 'Components/UI Elements/Modal',
  component: Modal,
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return (
      <>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {args.children}
        </Modal>
      </>
    );
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
    title: { control: 'text' },
    children: { control: 'text' },
    footer: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<ModalPropsAndCustomArgs>;

export const Default: Story = {
  args: {
    isOpen: false,
    title: 'Default Modal',
    children: 'This is the content of the modal.',
    footer: <button>Close</button>,
    className: '',
  },
};
