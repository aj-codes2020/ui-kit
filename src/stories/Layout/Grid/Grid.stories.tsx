import { Meta, StoryObj } from '@storybook/react';
import { Grid } from '../../../components';

const meta: Meta<typeof Grid> = {
 title: 'Components/Layout/Grid',
 component: Grid,
 parameters: {
   layout: 'fullscreen',
 },
 argTypes: {
   className: {
     control: { type: 'text' },
   },
 },
};

export default meta;
type Story = StoryObj<typeof meta>;

const gridChildren = (
 <>
   <div className="grid-container">
     <div className="grid-d-6 grid-t-3 grid-m-12" style={{ backgroundColor: '#f0f0f0', height: '50px'}}>Item 1</div>
     <div className="grid-d-6 grid-t-3 grid-m-12" style={{ backgroundColor: '#c0c0c0', height: '50px'}}>Item 2</div>
     <div className="grid-d-6 grid-t-3 grid-m-12" style={{ backgroundColor: '#f0f0f0', height: '50px'}}>Item 3</div>
     <div className="grid-d-6 grid-t-3 grid-m-12" style={{ backgroundColor: '#c0c0c0', height: '50px'}}>Item 4</div>
   </div>
 </>
)

export const Default: Story = {
 args: {
   className: '',
   children: gridChildren,
 },
};
