// stitches.config.ts
import { createStitches } from '@stitches/react';
import { Theme } from './design/theme';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...Theme.colors,
    },
    radii: {
      ...Theme.radii,
    },
    space: {
      spacing0: Theme.measures.dimensionSpacing0.css,
      spacing025: Theme.measures.dimensionSpacing025.css,
      spacing050: Theme.measures.dimensionSpacing050.css,
      spacing100: Theme.measures.dimensionSpacing100.css,
      spacing150: Theme.measures.dimensionSpacing150.css,
      spacing200: Theme.measures.dimensionSpacing200.css,
      spacing300: Theme.measures.dimensionSpacing300.css,
      spacing400: Theme.measures.dimensionSpacing400.css,
      spacing500: Theme.measures.dimensionSpacing500.css,
      spacing600: Theme.measures.dimensionSpacing600.css,
      spacing800: Theme.measures.dimensionSpacing800.css,
      spacing1000: Theme.measures.dimensionSpacing1000.css,
      spacing1200: Theme.measures.dimensionSpacing1200.css,
      spacing1600: Theme.measures.dimensionSpacing1600.css,
      spacing2000: Theme.measures.dimensionSpacing2000.css,
      spacing2400: Theme.measures.dimensionSpacing2400.css,
      spacing3200: Theme.measures.dimensionSpacing3200.css,
    },
  },
  media: {
    xs: `(min-width: ${Theme.measures.dimensionBreakpointXs.css})`,
    sm: `(min-width: ${Theme.measures.dimensionBreakpointSm.css})`,
    md: `(min-width: ${Theme.measures.dimensionBreakpointMd.css})`,
    lg: `(min-width: ${Theme.measures.dimensionBreakpointLg.css})`,
    xl: `(min-width: ${Theme.measures.dimensionBreakpointXl.css})`,
  }
});