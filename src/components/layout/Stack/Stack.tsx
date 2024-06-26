import { PropsWithChildren } from "react";
import { styled } from '../../../stitches.config';

type Props = {
  direction?: 'row' | 'column';
  gap?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "20" | "24" | "32";
};

const Stack = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
    gap: {
      0: {
        gap: '$spacing0',
      },
      1: {
        gap: '$spacing100',
      },
      2: {
        gap: '$spacing200',
      },
      3: {
        gap: '$spacing300',
      },
      4: {
        gap: '$spacing400',
      },
      5: {
        gap: '$spacing500',
      },
      6: {
        gap: '$spacing600',
      },
      8: {
        gap: '$spacing800',
      },
      10: {
        gap: '$spacing1000',
      },
      12: {
        gap: '$spacing1200',
      },
      16: {
        gap: '$spacing1600',
      },
      20: {
        gap: '$spacing2000',
      },
      24: {
        gap: '$spacing2400',
      },
      32: {
        gap: '$spacing3200',
      },
    },
  },
});

export const StackComponent = ({ direction = 'column', gap = '0', children }: PropsWithChildren<Props>) => {
  return (
    <Stack direction={direction} gap={gap}>
      {children}
    </Stack>
  );
};

export default StackComponent;