import type { Meta, StoryObj } from '@storybook/react';
import {Sidebar} from '../../../components'; 

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Navigation/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
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
    sidebarTitle: 'Sidebar',
    sidebarLinks: [
      { label: 'Home', href: '/', content:<div><p>Home Page</p></div> },
      { label: 'Link 1', href: '/link1', content:<div></div>  },
      { label: 'Link 2', href: '/link2', content:<div></div>  },
      { label: 'Link 3', href: '/link3', content:<div></div>  },
      { label: 'Link 4', href: '/link4', content:<div></div>  },
    ],
    headerContent: <div></div>,
    className: '',
  },
};

export const LoggedOut: Story = {
  ...Template,
  args: {
    sidebarTitle: 'Sidebar',
    sidebarLinks: [
      { label: 'Link 1', href: '/link1', content:<div></div>  },
      { label: 'Link 2', href: '/link2', content:<div></div>  },
      { label: 'Link 3', href: '/link3', content:<div></div>  },
      { label: 'Link 4', href: '/link4', content:<div></div>  },
    ],
    headerContent: <div>Please log in.</div>,
    className: '',
  },
};
