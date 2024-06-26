import * as Icons from '@radix-ui/react-icons';

type Props = {
  size: 'small' | 'medium';
  type: keyof typeof Icons;
  description?: string;
};

const Icon = ({ size, type, description }: Props) => {
  const Icon = Icons[type];
  // TODO: Get these sizes from variables once they're set up
  const width = size === 'small' ? 14 : 18;
  const height = size === 'small' ? 14 : 18;

  return (
    <i title={description}>
      <Icon width={width} height={height} />
    </i>
  );
};

export default Icon;