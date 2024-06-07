import { Meta, StoryObj } from '@storybook/react';
import {Grid} from '../../../components';

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
    <div className="col-container" style={{ backgroundColor: 'blue', padding: '3rem'}}>
      <div className="col-3 col-s-3" style={{ backgroundColor: '#f0f0f0'}}>Item 1</div>
      <div className="col-3 col-s-3" style={{ backgroundColor: '#c0c0c0' }}>Item 2</div>
      <div className="col-3 col-s-3" style={{ backgroundColor: '#f0f0f0', }}>Item 3</div>
      <div className="col-3 col-s-3" style={{ backgroundColor: '#c0c0c0', }}>
        <div className="col-container" style={{ backgroundColor: 'black'}}> 
          <div className="col-6 col-s-6" style={{ backgroundColor: '#f0f0f0' }}>Item 4</div>
          <div className="col-6 col-s-6" style={{ backgroundColor: '#f0f0f0' }}>Item 5</div>
        </div>
      </div>
    </div>
  </>
);

export const Default: Story = {
  args: {
    gap: '0rem',
    className: '',
    children: gridChildren,
  },
};
