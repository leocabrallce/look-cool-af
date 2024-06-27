import { Text } from "../../primitives/Text";

type Props = {
  children: string;
};

const Heading = ({ children }: Props) => {
  return <Text as="p" size="body">{children}</Text>;
};

export default Heading;