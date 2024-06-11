import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../../../components'; // Ensure the correct path to your Modal component

const meta: Meta = {
  title: 'Components/UI Elements/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: { control: 'text' },
    children: { control: 'text' },
    trigger: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    title: 'Modal Title',
    children: 'This is the content of the modal.',
    trigger: <button>Open Modal</button>,
    className: '',
  },
};
