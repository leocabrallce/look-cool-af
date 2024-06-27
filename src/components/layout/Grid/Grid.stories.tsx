import type { Meta, StoryObj } from '@storybook/react';
import Grid from './Grid';
import Box from '../../primitives/Box/Box';

const meta = {
  title: 'Components/Layout/Grid',
  component: Grid,
  // parameters: { layout: 'centered' },
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: ['children']
    }
  }
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const boxes = (
  <>
    <Box size="small" />
    <Box size="small" />
    <Box size="small" />
    <Box size="small" />
    <Box size="small" />
    <Box size="small" />
    <Box size="small" />
    <Box size="small" />
    <Box size="small" />
    <Box size="small" />
    <Box size="small" />
    <Box size="small" />
  </>
);

export const DynamicColumns: Story = {
  args: {
    columns: '12',
    rows: '3',
    gap: '0',
    children: boxes,
  },
};