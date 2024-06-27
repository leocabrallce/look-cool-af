import type { Meta, StoryObj } from '@storybook/react';
import Paragraph from './Paragraph';

const meta = {
  title: 'Text/Paragraph',
  component: Paragraph,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt ultricies. Nullam nec purus nec nunc tincidunt ultricies.',
  },
};