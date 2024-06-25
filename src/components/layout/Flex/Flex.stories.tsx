import type { Meta, StoryObj } from '@storybook/react';
import Flex from './Flex';
import Box from '../../demo/Box/Box';

const meta = {
  title: 'Layout/Flex',
  component: Flex,
  // parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Flex>;

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
    justify: 'start',
    align: 'start',
    children: boxes,
    gap: "10",
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
    justify: 'center',
    align: 'start',
    children: boxes,
    gap: "10",
  },
};

export const SpaceBetween: Story = {
  args: {
    direction: 'row',
    justify: 'space-between',
    align: 'center',
    children: boxes,
    gap: "10",
  },
};

export const SpaceAround: Story = {
  args: {
    direction: 'row',
    justify: 'space-around',
    align: 'center',
    children: boxes,
    gap: "10",
  },
};

export const FlexEnd: Story = {
  args: {
    direction: 'row',
    justify: 'end',
    align: 'center',
    children: boxes,
    gap: "10",
  },
};

export const ColumnFlexEnd: Story = {
  args: {
    direction: 'column',
    justify: 'end',
    align: 'center',
    children: boxes,
    gap: "10",
  },
};

export const ColumnSpaceBetween: Story = {
  args: {
    direction: 'column',
    justify: 'space-between',
    align: 'center',
    children: boxes,
    gap: "10",
  },
};

export const ColumnSpaceAround: Story = {
  args: {
    direction: 'column',
    justify: 'space-around',
    align: 'center',
    children: boxes,
    gap: "10",
  },
};

export const ColumnFlexStart: Story = {
  args: {
    direction: 'column',
    justify: 'start',
    align: 'center',
    children: boxes,
    gap: "10",
  },
};

export const RowFlexEnd: Story = {
  args: {
    direction: 'row',
    justify: 'end',
    align: 'center',
    children: boxes,
    gap: "10",
  },
};

export const RowCenter: Story = {
  args: {
    direction: 'row',
    justify: 'center',
    align: 'center',
    children: boxes,
    gap: "10",
  },
};

export const ColumnCenter: Story = {
  args: {
    direction: 'column',
    justify: 'center',
    align: 'center',
    children: boxes,
    gap: "10",
  },
};

export const RowFlexStart: Story = {
  args: {
    direction: 'row',
    justify: 'start',
    align: 'center',
    children: boxes,
    gap: "10",
  },
};

export const RowSpaceBetween: Story = {
  args: {
    direction: 'row',
    justify: 'space-between',
    align: 'center',
    children: boxes,
    gap: "10",
  },
};

export const RowSpaceAround: Story = {
  args: {
    direction: 'row',
    justify: 'space-around',
    align: 'center',
    children: boxes,
    gap: "10",
  },
};