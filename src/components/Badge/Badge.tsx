import { styled } from '../../stitches.config';
import Flex from '../layout/Flex';

type Props = {
  label: string;
  type: 'primary' | 'inverse' | 'success' | 'critical' | 'warning';
  disabled?: boolean;
  onClick?: () => void;
  iconPosition?: 'left' | 'right';
  icon?: React.ReactNode;
};

const BadgeLayout = styled('div', {
  height: '24px', // TODO: Move this to a token
  display: 'inline-flex',
  gap: '$spacing200',
  padding: '$spacing050 $spacing200',
  fontSize: '$label',
  fontFamily: '$label',
  backgroundColor: '$colorsBaseWhite',
  variants: {
    type: {
      primary: {
        color: '$textColorDefault',
      },
      inverse: {
        backgroundColor: '$colorsBaseBlack',
        color: '$colorsBaseWhite',
      },
      success: {
        color: '$textColorSuccess',
        backgroundColor: '$bgColorSuccess',
      },
      critical: {
        color: '$textColorCritical',
        backgroundColor: '$bgColorCritical',
      },
      warning: {
        color: '$textColorWarning',
        backgroundColor: '$bgColorWarning',
      },
    },
    iconPosition: {
      left: {
        flexDirection: 'row',
      },
      right: {
        flexDirection: 'row-reverse',
      },
    },
    disabled: {
      true: {
        cursor: 'unset',
        pointerEvents: 'none',
        opacity: 0.6,
      },
    },
  },
  defaultVariants: {
    type: 'primary',
    iconPosition: 'left',
  },
});

export const Badge = ({ label, onClick, icon, iconPosition, type, disabled }: Props) => {
  return (
    <BadgeLayout onClick={onClick} type={type} iconPosition={iconPosition} disabled={disabled}>
      <Flex gap='2' align='center' justify='center'>
        {iconPosition === 'left' && icon}
        {label}
        {iconPosition === 'right' && icon}
      </Flex>
    </BadgeLayout>
  );
};

export default Badge;