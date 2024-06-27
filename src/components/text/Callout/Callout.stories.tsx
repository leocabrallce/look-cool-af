import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './Callout';

const meta = {
  title: 'Text/Callout',
  component: Callout,
  // parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Callout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    type: 'info',
    children: 'Info Callout',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    children: 'Success Callout',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    children: 'Warning Callout',
  },
};

export const Critical: Story = {
  args: {
    type: 'critical',
    children: 'Critical Callout',
  },
};