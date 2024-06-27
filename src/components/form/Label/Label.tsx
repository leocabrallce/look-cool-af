import { styled } from '../../../stitches.config';

const StyledLabel = styled('label', {
  fontFamily: '$label',
  fontSize: '$label',
  lineHeight: '$label',
  letterSpacing: '$label',
  fontWeight: '$label',
  color: '$textColorDefault',
  hidden: false,
  variants: {
    state: {
      default: {
        color: '$textColorDefault',
      },
      critical: {
        color: '$textColorDefault',
      },
      success: {
        color: '$textColorDefault',
      },
      disabled: {
        opacity: 0.6,
      },
    },
  }
});

type Props = {
  htmlFor: string;
  ariaHidden: boolean;
  hidden: boolean;
  state: 'default' | 'critical' | 'success' | 'disabled';
  children: string;
};

const Label = ({ htmlFor, ariaHidden, hidden, state, children }: Props) => {
  return (
    <StyledLabel
      htmlFor={htmlFor}
      aria-hidden={ariaHidden}
      hidden={hidden}
      state={state}
    >
      {children}
    </StyledLabel>
  );
};

export default Label;