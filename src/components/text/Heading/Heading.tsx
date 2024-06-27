import { Text } from "../../primitives/Text";

type Props = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size: 'jumbo' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: string;
};

const Heading = ({ as, size, children }: Props) => {
  return <Text as={as} size={size}>{children}</Text>;
};

export default Heading;