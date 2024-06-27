import { PropsWithChildren } from "react";
import { styled } from '../../../stitches.config';
import type { Spacing } from '../../../types/Spacing';
import padding from "../../../utils/padding";

type Props = {
  paddingTop?: Spacing;
  paddingBottom?: Spacing;
  paddingLeft?: Spacing;
  paddingRight?: Spacing;
  fullWidth?: boolean;
  sticky?: boolean;
};

const StyledCard = styled('div', {
  backgroundColor: '$bgColorDefault',
  borderRadius: '$0',
  borderColor: '$borderColorDefault',
  borderWidth: '$sm',
  borderStyle: '$solid',
  padding: '$4',
  variants: {
    paddingTop: padding.top,
    paddingBottom: padding.bottom,
    paddingLeft: padding.left,
    paddingRight: padding.right,
    fullWidth: {
      true: {
        width: '100%',
      },
    },
    sticky: {
      true: {
        position: 'sticky',
        top: 0,
        zIndex: 1,
      },
    },
  },
});

export const CardComponent = ({ children, paddingTop, paddingBottom, paddingLeft, paddingRight, sticky }: PropsWithChildren<Props>) => {
  return (
    <StyledCard paddingTop={paddingTop} paddingBottom={paddingBottom} paddingLeft={paddingLeft} paddingRight={paddingRight} sticky={sticky}>
      {children}
    </StyledCard>
  );
};

export default CardComponent;