import { PropsWithChildren } from "react";
import { styled } from '../../../stitches.config';
import type { Spacing } from '../../../types/Spacing';
import padding from "../../../utils/padding";

type Props = {
  paddingTop?: Spacing;
  paddingBottom?: Spacing;
  paddingLeft?: Spacing;
  paddingRight?: Spacing;
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
  },
});

export const CardComponent = ({ children, ...props }: PropsWithChildren<Props>) => {
  return (
    <Card {...props}>
      {children}
    </Card>
  );
};

export default CardComponent;