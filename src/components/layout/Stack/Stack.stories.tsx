import type { Meta, StoryObj } from '@storybook/react';
import Stack from './Stack';
import Box from '../../primitives/Box/Box';

const meta = {
  title: 'Components/Layout/Stack',
  component: Stack,
  // parameters: { layout: 'centered' },
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: ['children']
    }
  }
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

const boxes = (
  <>
    <Box size="small" />
    <Box size="small" />
    <Box size="small" />
  </>
);

export const Row: Story = {
  args: {
    direction: 'row',
    gap: "10",
    children: boxes,
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
    gap: "10",
    children: boxes,
  },
};