import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta = {
  title: 'Primitives/Text',
  component: Text,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    as: 'h1',
    size: 'h1',
    color: 'default',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    as: 'h2',
    size: 'h2',
    color: 'default',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    as: 'h3',
    size: 'h3',
    color: 'default',
    children: 'Heading 3',
  },
};

export const Heading4: Story = {
  args: {
    as: 'h4',
    size: 'h4',
    color: 'default',
    children: 'Heading 4',
  },
};

export const Heading5: Story = {
  args: {
    as: 'h5',
    size: 'h5',
    color: 'default',
    children: 'Heading 5',
  },
};

export const Heading6: Story = {
  args: {
    as: 'h6',
    size: 'h6',
    color: 'default',
    children: 'Heading 6',
  },
};

export const Paragraph: Story = {
  args: {
    as: 'p',
    size: 'body',
    color: 'default',
    children: 'Paragraph',
  },
};

export const Span: Story = {
  args: {
    as: 'span',
    size: 'body',
    color: 'default',
    children: 'Span',
  },
};

export const HelperText: Story = {
  args: {
    as: 'span',
    size: 'body',
    color: 'default',
    children: 'Helper Text',
  },
};
