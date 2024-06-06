import type { Meta, StoryObj } from '@storybook/react';
import {Navbar} from '../../../components'; // Adjust the import path if necessary

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navigation/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    logoSrc: { control: 'text' },
    logoAlt: { control: 'text' },
    logoTitle: { control: 'text' },
    centerColumn: { control: 'object' },
    rightColumn: { control: 'object' },
    menuColumn: { control: 'object' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

const Template: Story = {
  render: (args) => <Navbar {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {
    logoSrc: 'https://via.placeholder.com/40',
    logoAlt: 'Logo',
    logoTitle: 'AJ.Codes',
    centerColumn: (
      <>
        <a href="/center1">Center Link 1</a>
        <a href="/center2">Center Link 2</a>
      </>
    ),
    rightColumn: (
      <>
        <a href="/right1">Right Link 1</a>
        <a href="/right2">Right Link 2</a>
      </>
    ),
    menuColumn: (
      <>
        <a href="/menu1">Menu Link 1</a>
        <a href="/menu2">Menu Link 2</a>
      </>
    ),
    className: '',
  },
};
