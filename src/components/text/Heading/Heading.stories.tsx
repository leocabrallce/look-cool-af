import type { Meta, StoryObj } from '@storybook/react';
import Heading from './Heading';

const meta = {
  title: 'Text/Heading',
  component: Heading,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Jumbo: Story = {
  args: {
    as: 'h1',
    size: 'jumbo',
    children: 'Jumbo Heading',
  },
};

export const Heading1: Story = {
  args: {
    as: 'h1',
    size: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    as: 'h2',
    size: 'h2',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    as: 'h3',
    size: 'h3',
    children: 'Heading 3',
  },
};

export const Heading4: Story = {
  args: {
    as: 'h4',
    size: 'h4',
    children: 'Heading 4',
  },
};

export const Heading5: Story = {
  args: {
    as: 'h5',
    size: 'h5',
    children: 'Heading 5',
  },
};

export const Heading6: Story = {
  args: {
    as: 'h6',
    size: 'h6',
    children: 'Heading 6',
  },
};