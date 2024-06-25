import { styled } from '../../../stitches.config';

type Props = {
  size?: 'small' | 'medium' | 'large' | 'full';
};

const Box = styled('div', {
  backgroundColor: '$colorsMagenta400',
  border: '1px solid $colorsMagenta700',
  variants: {
    // TODO: Use tokens for the size values
    size: {
      small: {
        width: '100px',
        height: '100px',
      },
      medium: {
        width: '200px',
        height: '200px',
      },
      large: {
        width: '300px',
        height: '300px',
      },
      full: {
        width: '100%',
        height: '100%',
      },
    },
  },
});

/**
 * A box used for demo purposes. Should not be used in production.
 */
function BoxComponent({ size = 'full' }: Props) {
  return <Box size={size} />;
}

export default BoxComponent;