import Mfa from "./Mfa";
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'PoC/MFA',
  component: Mfa,
  tags: ['autodocs'],
} satisfies Meta<typeof Mfa>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: 'default',
    helperText: 'Helper Text',
    showHelperText: false,
  },
};

export const Success: Story = {
  args: {
    state: 'success',
    helperText: 'Helper Text',
    showHelperText: true,
  },
};

export const Critical: Story = {
  args: {
    state: 'critical',
    helperText: 'The code you entered is incorrect. Please try again.',
    showHelperText: true,
  },
};