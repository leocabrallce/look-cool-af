import { styled } from '../../../stitches.config';
import { Text } from "../../primitives/Text";
import Icon from "../../icons/Icon";
import Flex from '../../layout/Flex';

type Props = {
  title: string;
  type: 'info' | 'success' | 'warning' | 'critical';
};

const StyledAlert = styled('div', {
  padding: '$spacing400',
  borderWidth: '$sm',
  borderStyle: '$solid',
  borderRadius: '$0',
  variants: {
    type: {
      info: {
        color: '$textColorInfo',
        borderColor: '$borderColorInfo',
        backgroundColor: '$bgColorInfo',
      },
      success: {
        color: '$textColorSuccess',
        borderColor: '$borderColorSuccess',
        backgroundColor: '$bgColorSuccess',
      },
      warning: {
        color: '$textColorWarning',
        borderColor: '$borderColorWarning',
        backgroundColor: '$bgColorWarning',
      },
      critical: {
        color: '$textColorCritical',
        borderColor: '$borderColorCritical',
        backgroundColor: '$bgColorCritical',
      },
    },
  },
});

const InfoIcon = <Icon type="InfoCircledIcon" size='medium' />;
const SuccessIcon = <Icon type="CheckCircledIcon" size='medium' />;
const WarningIcon = <Icon type="ExclamationTriangleIcon" size='medium' />;
const CriticalIcon = <Icon type="CrossCircledIcon" size='medium' />;

export const Alert = ({ type, title }: Props) => {
  return (
    <StyledAlert type={type}>
      <Flex gap="4" align="center">
        {type === 'info' && InfoIcon}
        {type === 'success' && SuccessIcon}
        {type === 'warning' && WarningIcon}
        {type === 'critical' && CriticalIcon}
        <Text as="span" size="h6">
          {title}
        </Text>
      </Flex>
    </StyledAlert>
  );
};

export default Alert;