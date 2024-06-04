import { Meta, StoryObj } from '@storybook/react';
import { Grid } from '../../../components';

const meta: Meta<typeof Grid> = {
  title: 'Components/Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    gap: {
      control: { type: 'text' },
    },
    className: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const gridChildren = (
  <>
    <div className="col-3 col-s-3" style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>Item 1</div>
    <div className="col-3 col-s-3" style={{ backgroundColor: '#c0c0c0', padding: '1rem' }}>Item 2</div>
    <div className="col-3 col-s-3" style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>Item 3</div>
  </>
);

export const Default: Story = {
  args: {
    gap: '1rem',
    className: '',
    children: gridChildren,
  },
};
