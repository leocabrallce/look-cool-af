import { PropsWithChildren } from "react";
import { styled } from '../../../stitches.config';
import { Spacing } from "../../../types/Spacing";
import gap from "../../../utils/gap";

type Props = {
  direction?: 'row' | 'column';
  gap?: Spacing;
};

const Stack = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
  variants: {
    gap: gap,
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
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