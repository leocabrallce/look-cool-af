import type { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';

const meta = {
  title: 'Components/Icons/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['ArrowRightIcon', 'ArrowLeftIcon', 'ArrowUpIcon', 'ArrowDownIcon'],
      },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
    type: 'ArrowRightIcon',
    description: 'Arrow right icon',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    type: 'ArrowRightIcon',
    description: 'Arrow right icon',
  },
};