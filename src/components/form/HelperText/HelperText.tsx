import { styled } from '../../../stitches.config';

const StyledHelperText = styled('span', {
  fontFamily: '$helperText',
  fontSize: '$helperText',
  lineHeight: '$helperText',
  letterSpacing: '$helperText',
  fontWeight: '$helperText',
  hidden: false,
  variants: {
    state: {
      default: {
        color: '$textColorDefault',
      },
      critical: {
        color: '$textColorCritical',
      },
      success: {
        color: '$textColorSuccess',
      },
      disabled: {
        opacity: 0.6,
      },
    },
  }
});

type Props = {
  id: string;
  showHelperText: boolean;
  state: 'default' | 'critical' | 'success' | 'disabled';
  children: string;
};

export const HelperText = ({ id, showHelperText, state, children }: Props) => (
  <StyledHelperText
    id={`${id}-helper-text`}
    aria-hidden={!showHelperText}
    state={state}
    hidden={!showHelperText}
  >
    {children}
  </StyledHelperText>
);