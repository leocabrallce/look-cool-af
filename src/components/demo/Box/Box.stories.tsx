import type { Meta, StoryObj } from '@storybook/react';
import Box from './Box';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Demo/Box',
  component: Box,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Full: Story = {
  args: {
    size: 'full',
  },
};