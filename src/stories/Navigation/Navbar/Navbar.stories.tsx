import { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '../../../components';

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
    logoTitle: 'Title',
    centerColumn: (
      <>
        <a href="/center1">CenterLink1</a>
        <a href="/center2">CenterLink2</a>
      </>
    ),
    rightColumn: (
      <>
        <a href="/right1">RightLink1</a>
        <a href="/right2">RightLink2</a>
      </>
    ),
    menuColumn: (
      <>
        <a href="/menu1">MenuLink1</a>
        <a href="/menu2">MenuLink2</a>
      </>
    ),
    className: '',
  },
};
