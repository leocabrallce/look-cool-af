import { Text } from "../../primitives/Text";
import { styled } from '../../../stitches.config';

type Props = {
  items: string[];
  ordered?: boolean;
};

const ListLayout = styled('ul', {
  padding: '0',
  margin: '0',
});

const ListItem = styled('li', {
});

const List = ({ items, ordered = false }: Props) => {
  return (
    <ListLayout as={ordered ? 'ol' : 'ul'}>
      {items.map((item, index) => (
        <ListItem key={index}>
          <Text as="span" size="body">{item}</Text>
        </ListItem>
      ))}
    </ListLayout>
  );
};

export default List;
