import { PropsWithChildren } from "react";
import { styled } from '../../../stitches.config';
import type { Spacing } from '../../../types/Spacing';
import gap from "../../../utils/gap";

// TODO: Margins and paddings should be set
type Props = {
  columns?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
  rows?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
  gap?: Spacing;
};

const Grid = styled('div', {
  display: 'grid',
  gridAutoFlow: 'row',
  variants: {
    gap: gap,
    columns: {
      1: {
        gridTemplateColumns: 'repeat(1, 1fr)',
      },
      2: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      3: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      4: {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
      5: {
        gridTemplateColumns: 'repeat(5, 1fr)',
      },
      6: {
        gridTemplateColumns: 'repeat(6, 1fr)',
      },
      7: {
        gridTemplateColumns: 'repeat(7, 1fr)',
      },
      8: {
        gridTemplateColumns: 'repeat(8, 1fr)',
      },
      9: {
        gridTemplateColumns: 'repeat(9, 1fr)',
      },
      10: {
        gridTemplateColumns: 'repeat(10, 1fr)',
      },
      11: {
        gridTemplateColumns: 'repeat(11, 1fr)',
      },
      12: {
        gridTemplateColumns: 'repeat(12, 1fr)',
      },
    },
    rows: {
      1: {
        gridTemplateRows: 'repeat(1, 1fr)',
      },
      2: {
        gridTemplateRows: 'repeat(2, 1fr)',
      },
      3: {
        gridTemplateRows: 'repeat(3, 1fr)',
      },
      4: {
        gridTemplateRows: 'repeat(4, 1fr)',
      },
      5: {
        gridTemplateRows: 'repeat(5, 1fr)',
      },
      6: {
        gridTemplateRows: 'repeat(6, 1fr)',
      },
      7: {
        gridTemplateRows: 'repeat(7, 1fr)',
      },
      8: {
        gridTemplateRows: 'repeat(8, 1fr)',
      },
      9: {
        gridTemplateRows: 'repeat(9, 1fr)',
      },
      10: {
        gridTemplateRows: 'repeat(10, 1fr)',
      },
      11: {
        gridTemplateRows: 'repeat(11, 1fr)',
      },
      12: {
        gridTemplateRows: 'repeat(12, 1fr)',
      },
    },
  },
});

export const GridComponent = ({ columns, rows, gap, children }: PropsWithChildren<Props>) => {
  return (
    <Grid columns={columns} rows={rows} gap={gap}>
      {children}
    </Grid>
  );
};

export default GridComponent;