import type { Meta, StoryObj } from '@storybook/react';
import TextInput from './TextInput';

const meta = {
  title: 'Components/Form/TextInput',
  component: TextInput,
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: 'default',
    showLabel: true,
    showHelperText: true,
    label: 'Label',
    helperText: 'Helper text',
    placeholder: 'Placeholder',
    type: 'text',
  },
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
    showLabel: true,
    showHelperText: true,
    label: 'Label',
    helperText: 'Helper text',
    placeholder: 'Placeholder',
    type: 'text',
  },
};

export const Critical: Story = {
  args: {
    state: 'critical',
    showLabel: true,
    showHelperText: true,
    label: 'Label',
    helperText: 'Helper text',
    placeholder: 'Placeholder',
    type: 'text',
  },
};

export const Success: Story = {
  args: {
    state: 'success',
    showLabel: true,
    showHelperText: true,
    label: 'Label',
    helperText: 'Helper text',
    placeholder: 'Placeholder',
    type: 'text',
  },
};

export const NoLabel: Story = {
  args: {
    state: 'default',
    showLabel: false,
    showHelperText: true,
    label: 'Label',
    helperText: 'Helper text',
    placeholder: 'Placeholder',
    type: 'text',
  },
};

export const NoHelperText: Story = {
  args: {
    state: 'default',
    showLabel: true,
    showHelperText: false,
    label: 'Label',
    helperText: 'Helper text',
    placeholder: 'Placeholder',
    type: 'text',
  },
};

export const NoLabelAndNoHelperText: Story = {
  args: {
    state: 'default',
    showLabel: false,
    showHelperText: false,
    label: 'Label',
    helperText: 'Helper text',
    placeholder: 'Placeholder',
    type: 'text',
  },
};