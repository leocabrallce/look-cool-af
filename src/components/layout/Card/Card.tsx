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
};

export const Card = styled('div', {
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
  },
});

export const CardComponent = ({ children, paddingTop, paddingBottom, paddingLeft, paddingRight }: PropsWithChildren<Props>) => {
  return (
    <Card paddingTop={paddingTop} paddingBottom={paddingBottom} paddingLeft={paddingLeft} paddingRight={paddingRight}>
      {children}
    </Card>
  );
};

export default CardComponent;