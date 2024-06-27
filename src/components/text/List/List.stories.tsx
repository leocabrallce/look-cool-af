import type { Meta, StoryObj } from '@storybook/react';
import List from './List';

const meta = {
  title: 'Text/List',
  component: List,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Nullam nec purus nec nunc tincidunt ultricies.',
      'Nullam nec purus nec nunc tincidunt ultricies.',
    ]
  },
};

export const Ordered: Story = {
  args: {
    items: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Nullam nec purus nec nunc tincidunt ultricies.',
      'Nullam nec purus nec nunc tincidunt ultricies.',
    ],
    ordered: true,
  },
};