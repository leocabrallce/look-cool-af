import Jobs from "./Jobs";
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'PoC/Jobs',
  component: Jobs,
  tags: ['autodocs'],
} satisfies Meta<typeof Jobs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: 'default',
  },
};
