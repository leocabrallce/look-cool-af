import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import Icon from '../icons/Icon';
import { fn } from '@storybook/test';

const BellIcon = () => <Icon type='BellIcon' size='small' />;

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: ['icon', 'onClick'],
    }
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary',
    type: 'primary',
    icon: <BellIcon />,
  },
};

export const Inverse: Story = {
  args: {
    label: 'Inverse',
    type: 'inverse',
    icon: <BellIcon />,
  },
};

export const Success: Story = {
  args: {
    label: 'Success',
    type: 'success',
    icon: <BellIcon />,
  },
};

export const Critical: Story = {
  args: {
    label: 'Critical',
    type: 'critical',
    icon: <BellIcon />,
  },
};

export const Link: Story = {
  args: {
    label: 'Link',
    type: 'link',
    icon: <BellIcon />,
  },
};

export const WithIcon: Story = {
  args: {
    label: 'With icon',
    type: 'primary',
    iconPosition: 'left',
    icon: <BellIcon />,
  },
};

export const WithIconRight: Story = {
  args: {
    label: 'With icon right',
    type: 'primary',
    iconPosition: 'right',
    icon: <BellIcon />,
  },
};