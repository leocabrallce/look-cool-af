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
    title: 'Info',
    type: 'info',
    children: 'Info Callout',
  },
};

export const Success: Story = {
  args: {
    title: 'Success',
    type: 'success',
    children: 'Success Callout',
  },
};

export const Warning: Story = {
  args: {
    title: 'Warning',
    type: 'warning',
    children: 'Warning Callout',
  },
};

export const Critical: Story = {
  args: {
    title: 'Critical',
    type: 'critical',
    children: 'Critical Callout',
  },
};