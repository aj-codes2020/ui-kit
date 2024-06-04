import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {FileUpload} from '../../../components'; // Ensure the correct path to your FileUpload component

interface FileUploadPropsAndCustomArgs extends React.ComponentProps<typeof FileUpload> {}

const meta: Meta<FileUploadPropsAndCustomArgs> = {
    title: 'Components/UI Elements/File Upload',
  component: FileUpload,
  render: (args) => {
    const [, setFile] = useState<File | null>(null);
    const handleFileSelect = (selectedFile: File | null) => {
      setFile(selectedFile);
    };
    return <FileUpload {...args} onFileSelect={handleFileSelect} />;
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onFileSelect: { action: 'fileSelected' },
    accept: { control: 'text' },
    multiple: { control: 'boolean' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<FileUploadPropsAndCustomArgs>;

export const Default: Story = {
  args: {
    accept: '',
    multiple: false,
    className: '',
  },
};

export const MultipleFiles: Story = {
  args: {
    accept: '',
    multiple: true,
    className: '',
  },
};

export const CustomClass: Story = {
  args: {
    accept: '',
    multiple: false,
    className: 'custom-class',
  },
};
