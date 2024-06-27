import { PropsWithChildren, useRef } from "react";
import { styled } from '../../../stitches.config';
import { nanoid } from "nanoid";
import Stack from "../../layout/Stack";
import Label from "../Label/Label";
import { HelperText } from "../HelperText/HelperText";

type Props = {
  state: "default" | "critical" | "success" | "disabled";
  showLabel?: boolean;
  showHelperText?: boolean;
  helperTextAnchor?: string;
  label?: string;
  helperText?: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  required?: boolean;
  // TODO: Icon variations for text input
  // iconLeft?: React.ReactNode;
  // iconRight?: React.ReactNode;
};

const StyledInput = styled('input', {
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
  },
  defaultVariants: {
    state: 'default',
  },
});

/**
 * An Input is a form element that lets users enter one of various types of text on a single line.
 */
export const TextInput = ({
  label,
  helperText,
  placeholder,
  state = 'default',
  showLabel = true,
  showHelperText = true,
  type = 'text',
  required = false,
}: PropsWithChildren<Props>) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const id = nanoid();

  return (
    <Stack direction="vertical" gap="1">
      <Label htmlFor={id} ariaHidden={!showLabel} hidden={!showLabel} state={state} required={required}>
        {label}
      </Label>
      <StyledInput
        required={required}
        ref={inputRef}
        id={id}
        type={type}
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

export default TextInput;