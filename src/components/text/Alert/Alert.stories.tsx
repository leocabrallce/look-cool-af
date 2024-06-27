import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta = {
  title: 'Text/Alert',
  component: Alert,
  // parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    title: 'Info',
    type: 'info',
  },
};

export const Success: Story = {
  args: {
    title: 'Success',
    type: 'success',
  },
};

export const Warning: Story = {
  args: {
    title: 'Warning',
    type: 'warning',
  },
};

export const Critical: Story = {
  args: {
    title: 'Critical',
    type: 'critical',
  },
};