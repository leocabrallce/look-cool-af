import { PropsWithChildren } from "react";
import { styled } from '../../../stitches.config';

type Props = {
  direction?: 'row' | 'column';
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
  align?: 'start' | 'center' | 'end';
  gap?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "20" | "24" | "32";
};

const Flex = styled('div', {
  display: 'flex',
  variants: {
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
    gap: {
      "0": {
        gap: '$spacing0',
      },
      "1": {
        gap: '$spacing100',
      },
      "2": {
        gap: '$spacing200',
      },
      "3": {
        gap: '$spacing300',
      },
      "4": {
        gap: '$spacing400',
      },
      "5": {
        gap: '$spacing500',
      },
      "6": {
        gap: '$spacing600',
      },
      "8": {
        gap: '$spacing800',
      },
      "10": {
        gap: '$spacing1000',
      },
      "12": {
        gap: '$spacing1200',
      },
      "16": {
        gap: '$spacing1600',
      },
      "20": {
        gap: '$spacing2000',
      },
      "24": {
        gap: '$spacing2400',
      },
      "32": {
        gap: '$spacing3200',
      },
    }
  },
  defaultVariants: {
    direction: 'row',
    justify: 'flex-start',
    align: 'flex-start',
    gap: "0"
  },
});

/**
 * Encapsulates a flex container with a direction, justify, align, and gap.
 */
const FlexComponent = ({ direction, justify, align, children, gap, ...props }: PropsWithChildren<Props>) => {
  return (
    <Flex direction={direction} justify={justify} align={align} gap={gap} {...props}>
      {children}
    </Flex>
  );
};

export default FlexComponent;
