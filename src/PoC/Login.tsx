import Button from "../components/Button/Button";
import TextInput from "../components/form/TextInput/TextInput";
import Card from "../components/layout/Card";
import Flex from "../components/layout/Flex";
import Grid from "../components/layout/Grid";
import GridItem from "../components/layout/GridItem";
import Stack from "../components/layout/Stack";
import Heading from "../components/text/Heading/Heading";

type Props = {
  state: 'default' | 'success' | 'critical';
};

const Login = ({ state = 'default' }: Props) => {
  return (
    <Grid columns="12">
      <GridItem offset="3" span="6">
        <Card paddingTop="32" paddingBottom="32" paddingLeft="12" paddingRight="12" fullWidth>
          <Stack direction="vertical" gap="16">
            <Heading as="h1" size="h1">Login</Heading>

            <Stack direction="vertical" gap="4">
              <TextInput state={state} label="Username" placeholder="Enter your username" />

              <TextInput state={state} label="Password" placeholder="Enter your password" type="password" helperText="Forgot your password?" helperTextAnchor="#" />
            </Stack>

            <Flex justify="space-between">
              <Button type="primary" label="Sign up" />
              <Button type="inverse" label="Login" />
            </Flex>
          </Stack>
        </Card>
      </GridItem>
    </Grid>
  );
};

export default Login;