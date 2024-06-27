import Login from "./Login";
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'PoC/Login',
  component: Login,
  tags: ['autodocs'],
} satisfies Meta<typeof Login>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: 'default',
  },
};

export const Success: Story = {
  args: {
    state: 'success',
  },
};

export const Critical: Story = {
  args: {
    state: 'critical',
  },
};