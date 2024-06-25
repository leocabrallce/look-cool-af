import { styled } from '../../../stitches.config';

type Props = {
  size?: 'small' | 'medium' | 'large';
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
    },
  },
});

/**
 * A box used for demo purposes. Should not be used in production.
 */
function BoxComponent({ size }: Props) {
  return <Box size={size} />;
}

export default BoxComponent;