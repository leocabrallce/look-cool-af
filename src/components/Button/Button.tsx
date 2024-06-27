import { styled } from '../../stitches.config';
import Flex from '../layout/Flex';

type Props = {
  label: string;
  type: 'primary' | 'inverse' | 'success' | 'critical' | 'link';
  disabled?: boolean;
  onClick?: () => void;
  iconPosition?: 'left' | 'right';
  icon?: React.ReactNode;
};

const ButtonLayout = styled('button', {
  gap: '$spacing200',
  padding: '$spacing150 $spacing400',
  fontSize: '$label',
  fontFamily: '$label',
  borderStyle: '$solid',
  borderWidth: '$md',
  cursor: 'pointer',
  backgroundColor: '$colorsBaseWhite',
  variants: {
    type: {
      primary: {
        color: '$textColorDefault',
        borderColor: '$borderColorDefault',
        '&:hover': {
          color: '$textColorInfo',
          borderColor: '$borderColorInfo',
        },
      },
      inverse: {
        backgroundColor: '$colorsBaseBlack',
        color: '$colorsBaseWhite',
        borderColor: '$borderColorDefault',
        '&:hover': {
          color: '$colorsBaseWhite',
          borderColor: '$colorsGray800',
        },
      },
      success: {
        color: '$textColorSuccess',
        borderColor: '$borderColorSuccess',
        '&:hover': {
          color: '$textColorSuccess',
          borderColor: '$borderColorSuccess',
          backgroundColor: '$bgColorSuccess',
        },
      },
      critical: {
        color: '$textColorCritical',
        borderColor: '$borderColorCritical',
        '&:hover': {
          color: '$textColorCritical',
          borderColor: '$borderColorCritical',
          backgroundColor: '$bgColorCritical',
        },
      },
      link: {
        color: '$textColorLink',
        borderWidth: '$none',
        '&:hover': {
          textDecoration: 'underline',
        },
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

export const Button = ({ label, onClick, icon, iconPosition, type, disabled }: Props) => {
  return (
    <ButtonLayout onClick={onClick} type={type} iconPosition={iconPosition} disabled={disabled}>
      <Flex gap='2' align='center' justify='center'>
        {iconPosition === 'left' && icon}
        {label}
        {iconPosition === 'right' && icon}
      </Flex>
    </ButtonLayout>
  );
};

export default Button;