import { PropsWithChildren } from "react";
import { styled } from '../../../stitches.config';

type Props = {
  span?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
  offset?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11";
};

const StyledGridItem = styled('div', {
  variants: {
    span: {
      1: {
        gridColumn: 'span 1 / span 1',
      },
      2: {
        gridColumn: 'span 2 / span 2',
      },
      3: {
        gridColumn: 'span 3 / span 3',
      },
      4: {
        gridColumn: 'span 4 / span 4',
      },
      5: {
        gridColumn: 'span 5 / span 5',
      },
      6: {
        gridColumn: 'span 6 / span 6',
      },
      7: {
        gridColumn: 'span 7 / span 7',
      },
      8: {
        gridColumn: 'span 8 / span 8',
      },
      9: {
        gridColumn: 'span 9 / span 9',
      },
      10: {
        gridColumn: 'span 10 / span 10',
      },
      11: {
        gridColumn: 'span 11 / span 11',
      },
      12: {
        gridColumn: 'span 12 / span 12',
      },
    },
    offset: {
      1: {
        gridColumnStart: '2',
      },
      2: {
        gridColumnStart: '3',
      },
      3: {
        gridColumnStart: '4',
      },
      4: {
        gridColumnStart: '5',
      },
      5: {
        gridColumnStart: '6',
      },
      6: {
        gridColumnStart: '7',
      },
      7: {
        gridColumnStart: '8',
      },
      8: {
        gridColumnStart: '9',
      },
      9: {
        gridColumnStart: '10',
      },
      10: {
        gridColumnStart: '11',
      },
      11: {
        gridColumnStart: '12',
      },
    },
  },
});

const GridItem = ({ children, span, offset }: PropsWithChildren<Props>) => {
  return (
    <StyledGridItem span={span} offset={offset}>
      {children}
    </StyledGridItem>
  );
};

export default GridItem;