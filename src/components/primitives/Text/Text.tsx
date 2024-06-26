import { styled } from '../../../stitches.config';

type Props = {
  children: string;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  size: 'jumbo' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'label' | 'helper-text';
  color: 'default' | 'link' | 'link-hover' | 'info' | 'success' | 'warning' | 'critical' | 'required';
};

// 'as' will be how we determine the HTML element to render, but no styles will be applied
// 'size' will be how we determine the typography style to apply, based on the theme, but regardless of the HTML element

export const Text = styled('span', {
  fontFamily: '$body',
  fontSize: '$body',
  lineHeight: '$body',
  letterSpacing: '$body',
  color: '$default',
  variants: {
    size: {
      jumbo: {
        fontFamily: '$jumbo',
        fontSize: '$jumbo',
        lineHeight: '$jumbo',
        letterSpacing: '$jumbo',
      },
      h1: {
        fontFamily: '$heading',
        fontSize: '$h1',
        lineHeight: '$h1',
        letterSpacing: '$h1',
      },
      h2: {
        fontFamily: '$heading',
        fontSize: '$h2',
        lineHeight: '$h2',
        letterSpacing: '$h2',
      },
      h3: {
        fontFamily: '$heading',
        fontSize: '$h3',
        lineHeight: '$h3',
        letterSpacing: '$h3',
      },
      h4: {
        fontFamily: '$heading',
        fontSize: '$h4',
        lineHeight: '$h4',
        letterSpacing: '$h4',
      },
      h5: {
        fontFamily: '$heading',
        fontSize: '$h5',
        lineHeight: '$h5',
        letterSpacing: '$h5',
      },
      h6: {
        fontFamily: '$heading',
        fontSize: '$h6',
        lineHeight: '$h6',
        letterSpacing: '$h6',
      },
      body: {
        fontFamily: '$body',
        fontSize: '$body',
        lineHeight: '$body',
        letterSpacing: '$body',
      },
      label: {
        fontFamily: '$label',
        fontSize: '$label',
        lineHeight: '$label',
        letterSpacing: '$label',
      },
      'helper-text': {
        fontFamily: '$helperText',
        fontSize: '$helperText',
        lineHeight: '$helperText',
        letterSpacing: '$helperText',
      },
    },
    color: {
      default: {
        color: '$default',
      },
      link: {
        color: '$link',
      },
      'link-hover': {
        color: '$link-hover',
      },
      info: {
        color: '$info',
      },
      success: {
        color: '$success',
      },
      warning: {
        color: '$warning',
      },
      critical: {
        color: '$critical',
      },
      required: {
        color: '$required',
      },
    }
  },
});

const TextComponent = ({ children, as, size, color }: Props) => {
  return (
    <Text as={as} size={size} color={color}>
      {children}
    </Text>
  );
};

export default TextComponent;