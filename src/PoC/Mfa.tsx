import Button from "../components/Button/Button";
import TextInput from "../components/form/TextInput/TextInput";
import Card from "../components/layout/Card";
import Flex from "../components/layout/Flex";
import Grid from "../components/layout/Grid";
import GridItem from "../components/layout/GridItem";
import Stack from "../components/layout/Stack";
import Paragraph from "../components/text/Paragraph/Paragraph";
import Heading from "../components/text/Heading/Heading";

type Props = {
  state: 'default' | 'success' | 'critical';
  showHelperText: boolean;
  helperText: string;
};

const Mfa = ({ state = 'default', showHelperText = false, helperText = '' }: Props) => {
  return (
    <Grid columns="12">
      <GridItem offset="3" span="6">
        <Card paddingTop="32" paddingBottom="32" paddingLeft="12" paddingRight="12" fullWidth>
          <Stack direction="vertical" gap="16">
            <Heading as="h1" size="h1">2FA</Heading>

            <Paragraph>
              Enter the code from your authenticator app.
            </Paragraph>

            <TextInput state={state} label="Code" placeholder="Enter your code" showHelperText={showHelperText} helperText={helperText} />

            <Stack gap="16">
              <Flex justify="space-between">
                <Button type="primary" label="Cancel" />
                <Button type="inverse" label="Confirm" />
              </Flex>
              <Button type="link" label="Resend code" />
            </Stack>
          </Stack>
        </Card>
      </GridItem>
    </Grid>
  );
};

export default Mfa;