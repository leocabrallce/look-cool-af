import type { Meta, StoryObj } from '@storybook/react';
import TextArea from './TextArea';

const meta = {
  title: 'Components/Form/TextArea',
  component: TextArea,
  tags: ['autodocs'],
} satisfies Meta<typeof TextArea>;

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
  },
};

export const Required: Story = {
  args: {
    state: 'default',
    showLabel: true,
    showHelperText: true,
    label: 'Label',
    helperText: 'Helper text',
    placeholder: 'Placeholder',
    required: true,
  },
};