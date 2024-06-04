import { Meta, StoryObj } from '@storybook/react';
import {Carousel} from '../../../components'; // Ensure the correct path to your Carousel component

const meta: Meta<typeof Carousel> = {
  title: 'Components/Page Elements/Carousel',
  component: Carousel,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    items: { control: 'object' },
    autoplay: { control: 'boolean' },
    autoplayInterval: { control: 'number' },
    showNavigation: { control: 'boolean' },
    navigationType: { control: 'radio', options: ['dots', 'pictures'] },
    navigationPosition: { control: 'radio', options: ['bottom', 'below'] },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const textItems = [
  <div style={{ padding: '2rem', backgroundColor: '#f0f0f0', height: '200px', display: 'flex', alignItems: 'center', justifyContent:'center' }}>Text Item 1</div>,
  <div style={{ padding: '2rem', backgroundColor: '#c0c0c0', height: '200px', display: 'flex', alignItems: 'center', justifyContent:'center' }}>Text Item 2</div>,
  <div style={{ padding: '2rem', backgroundColor: '#f0f0f0', height: '200px', display: 'flex', alignItems: 'center', justifyContent:'center' }}>Text Item 3</div>,
];

const imageItems = [
  <img src="https://via.placeholder.com/600x400" style={{width: '100%'}} alt="Item 1" />,
  <img src="https://via.placeholder.com/600x400" style={{width: '100%'}} alt="Item 2" />,
  <img src="https://via.placeholder.com/600x400" style={{width: '100%'}}alt="Item 3" />,
];

export const TextCarousel: Story = {
  args: {
    items: textItems,
    autoplay: true,
    autoplayInterval: 3000,
    showNavigation: true,
    navigationType: 'dots',
    navigationPosition: 'bottom',
    className: '',
  },
};

export const ImageCarousel: Story = {
  args: {
    items: imageItems,
    autoplay: true,
    autoplayInterval: 3000,
    showNavigation: true,
    navigationType: 'pictures',
    navigationPosition: 'bottom',
    className: '',
  },
};
