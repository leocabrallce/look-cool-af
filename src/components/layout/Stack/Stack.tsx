import { PropsWithChildren } from "react";
import { styled } from '../../../stitches.config';
import { Spacing } from "../../../types/Spacing";
import gap from "../../../utils/gap";

type Props = {
  direction?: 'horizontal' | 'vertical';
  gap?: Spacing;
};

const StackLayout = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
  variants: {
    gap: gap,
    direction: {
      horizontal: {
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
      },
    },
  },
});

export const Stack = ({ direction = 'vertical', gap = '0', children }: PropsWithChildren<Props>) => {
  return (
    <StackLayout direction={direction} gap={gap}>
      {children}
    </StackLayout>
  );
};

export default Stack;