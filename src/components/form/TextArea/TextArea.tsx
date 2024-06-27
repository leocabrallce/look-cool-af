import { PropsWithChildren } from "react";
import { styled } from '../../../stitches.config';
import { nanoid } from "nanoid";
import Stack from "../../layout/Stack";
import Label from "../Label/Label";
import { HelperText } from "../HelperText/HelperText";
import Required from "../Required/Required";

type Props = {
  state: "default" | "critical" | "success" | "disabled";
  showLabel?: boolean;
  showHelperText?: boolean;
  label?: string;
  helperText?: string;
  placeholder?: string;
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
  required?: boolean;
  // TODO: Icon variations for text area
  // iconLeft?: React.ReactNode;
  // iconRight?: React.ReactNode;
};

const StyledTextArea = styled('textarea', {
  padding: '$spacing200',
  borderColor: '$borderColorInputDefault',
  backgroundColor: '$bgColorDefault',
  borderRadius: '$0',
  borderWidth: '$sm',
  borderStyle: '$solid',
  fontFamily: '$body',
  fontSize: '$body',
  lineHeight: '$body',
  letterSpacing: '$body',
  color: '$default',
  '&:disabled': {
    opacity: 0.6,
  },
  '&:hover': {
    borderColor: '$borderColorInputDefaultHover',
  },
  variants: {
    state: {
      default: {
        borderColor: '$borderColorInputDefault',
        '&:hover': {
          borderColor: '$borderColorInputDefaultHover',
        },
      },
      critical: {
        borderColor: '$borderColorInputCritical',
        '&:hover': {
          borderColor: '$borderColorInputCriticalHover',
        },
      },
      success: {
        borderColor: '$borderColorInputSuccess',
        '&:hover': {
          borderColor: '$borderColorInputSuccessHover',
        },
      },
      disabled: {
        opacity: 0.6,
        pointerEvents: 'none',
        '&:hover': {
          borderColor: '$borderColorDefault',
        },
      },
    },
    resize: {
      none: {
        resize: 'none',
      },
      both: {
        resize: 'both',
      },
      horizontal: {
        resize: 'horizontal',
      },
      vertical: {
        resize: 'vertical',
      }
    }
  },
  defaultVariants: {
    state: 'default',
  },
});

/**
 * An Text Area is a form element that lets users enter one of various types of text on a single or multiple lines.
 */
const TextArea = ({
  state = 'default',
  showLabel = true,
  showHelperText = true,
  label = 'Label',
  helperText = 'Helper text',
  placeholder = 'Placeholder',
  resize = 'vertical',
  required = false,
}: PropsWithChildren<Props>) => {
  const id = nanoid();

  return (
    <Stack direction="vertical" gap="1">
      <Label htmlFor={id} ariaHidden={!showLabel} hidden={!showLabel} state={state} required={required}>
        {label}
      </Label>
      <StyledTextArea
        id={id}
        resize={resize}
        placeholder={placeholder}
        state={state}
        disabled={state === 'disabled'}
        aria-describedby={helperText ? `${id}-helper-text` : undefined}
      />
      <HelperText id={id} showHelperText={showHelperText} state={state}>
        {helperText}
      </HelperText>
    </Stack>
  );
};

export default TextArea;