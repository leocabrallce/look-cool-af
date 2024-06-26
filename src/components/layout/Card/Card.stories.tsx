import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import Box from '../../primitives/Box/Box';

const meta = {
  title: 'Components/Layout/Card',
  component: Card,
  // parameters: { layout: 'centered' },
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: ['children']
    }
  }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const boxes = (
  <>
    <Box size="small" />
    <Box size="small" />
    <Box size="small" />
  </>
);

export const Default: Story = {
  args: {
    children: boxes,
  },
};
