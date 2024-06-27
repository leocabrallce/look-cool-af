import { styled } from '@stitches/react';

type Props = {
  required: boolean;
};

const StyledRequired = styled('span', {
  color: '$iconColorCritical',
});

const Required = ({ required }: Props) => {
  return (
    <StyledRequired aria-hidden={!required} hidden={!required}>
      *
    </StyledRequired>
  );
};

export default Required;