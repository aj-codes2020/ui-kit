import type { Meta, StoryObj } from '@storybook/react';
import {Sidebar} from '../../../components';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Navigation/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    logoSrc: { control: 'text' },
    logoAlt: { control: 'text' },
    sidebarTitle: { control: 'text' },
    sidebarLinks: { control: 'object' },
    headerContent: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

const Template: Story = {
  render: (args) => <Sidebar {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {
    logoSrc: 'https://via.placeholder.com/40',
    logoAlt: 'Logo',
    sidebarTitle: 'Sidebar Title',
    sidebarLinks: (
      <>
        <li><a href="/">Home</a></li>
        <li><a href="/link1">Link 1</a></li>
        <li><a href="/link2">Link 2</a></li>
        <li><a href="/link3">Link 3</a></li>
        <li><a href="/link4">Link 4</a></li>
      </>
    ),
    headerContent: <div>Header Content</div>,
    className: '',
    children: (
      <div>
        <h1>Main Content</h1>
        <p>This is the main content area.</p>
      </div>
    ),
  },
};

export const LoggedOut: Story = {
  ...Template,
  args: {
    logoSrc: 'https://via.placeholder.com/40',
    logoAlt: 'Logo',
    sidebarTitle: 'Sidebar Title',
    sidebarLinks: (
      <>
        <li><a href="/link1">Link 1</a></li>
        <li><a href="/link2">Link 2</a></li>
        <li><a href="/link3">Link 3</a></li>
        <li><a href="/link4">Link 4</a></li>
      </>
    ),
    headerContent: <div>Please log in.</div>,
    className: '',
    children: (
      <div>
        <h1>Main Content</h1>
        <p>This is the main content area.</p>
      </div>
    ),
  },
};
