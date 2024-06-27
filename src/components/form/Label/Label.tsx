import { styled } from '../../../stitches.config';
import Flex from '../../layout/Flex';
import Required from '../Required/Required';

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
  required: boolean;
};

const Label = ({ htmlFor, ariaHidden, hidden, state, children, required }: Props) => {
  return (
    <Flex align="center" direction="row" gap="1">
      <Required required={required} />
      <StyledLabel
        htmlFor={htmlFor}
        aria-hidden={ariaHidden}
        hidden={hidden}
        state={state}
      >
        {children}
      </StyledLabel>
    </Flex>
  );
};

export default Label;