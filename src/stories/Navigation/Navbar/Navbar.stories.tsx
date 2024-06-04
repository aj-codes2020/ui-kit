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
    centerColumn: [
      { label: 'Center Link 1', href: '/center1', content: <div>Center Content 1</div> },
      { label: 'Center Link 2', href: '/center2', content: <div>Center Content 2</div> },
    ],
    rightColumn: [
      { label: 'Right Link 1', href: '/right1', content: <div>Right Content 1</div> },
      { label: 'Right Link 2', href: '/right2', content: <div>Right Content 2</div> },
    ],
    menuColumn: [
      { label: 'Menu Link 1', href: '/menu1', content: <div>Menu Content 1</div> },
      { label: 'Menu Link 2', href: '/menu2', content: <div>Menu Content 2</div> },
    ],
    className: '',
  },
};
