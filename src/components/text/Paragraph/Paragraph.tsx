import { Text } from "../../primitives/Text";

type Props = {
  children: string;
};

const Paragraph = ({ children }: Props) => {
  return <Text as="p" size="body">{children}</Text>;
};

export default Paragraph;