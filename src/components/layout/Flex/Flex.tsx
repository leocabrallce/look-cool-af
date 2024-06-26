import { PropsWithChildren } from "react";
import { styled } from '../../../stitches.config';
import type { Spacing } from '../../../types/Spacing';
import gap from "../../../utils/gap";

type Props = {
  grow?: boolean;
  stretch?: boolean;
  direction?: 'row' | 'column';
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
  align?: 'start' | 'center' | 'end';
  gap?: Spacing;
};

const Flex = styled('div', {
  display: 'flex',
  variants: {
    gap: gap,
    grow: {
      true: {
        flexGrow: 1,
      },
    },
    stretch: {
      true: {
        flexShrink: 0,
        flexBasis: 'auto',
      },
    },
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
    justify: {
      'start': {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      'end': {
        justifyContent: 'flex-end',
      },
      'space-between': {
        justifyContent: 'space-between',
      },
      'space-around': {
        justifyContent: 'space-around',
      },
    },
    align: {
      'start': {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      'end': {
        alignItems: 'flex-end',
      },
    },
  },
  defaultVariants: {
    direction: 'row',
    justify: 'flex-start',
    align: 'flex-start',
    gap: "0"
  },
});

/**
 * Encapsulates a flex container with optional grow, stretch, direction, justify, align, and gap props.
 */
const FlexComponent = ({ children, grow, stretch, direction, justify, align, gap }: PropsWithChildren<Props>) => {
  return (
    <Flex
      grow={grow}
      stretch={stretch}
      direction={direction}
      justify={justify}
      align={align}
      gap={gap}
    >
      {children}
    </Flex>
  );
};

export default FlexComponent;
