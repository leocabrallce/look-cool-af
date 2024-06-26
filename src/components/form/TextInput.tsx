import { PropsWithChildren, useRef } from "react";
import { styled } from '../../stitches.config';
import { Stack } from "../layout/Stack";
import { nanoid } from "nanoid";

type Props = {
  state: "default" | "critical" | "success" | "disabled";
  showLabel?: boolean;
  showHelperText?: boolean;
  label?: string;
  helperText?: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  // TODO: Icon
  // icon?: React.ReactNode;
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

const StyledLabel = styled('label', {
  fontFamily: '$label',
  fontSize: '$label',
  lineHeight: '$label',
  letterSpacing: '$label',
  fontWeight: '$label',
  color: '$textColorDefault',
  hidden: false,
  variants: {
    state: {
      default: {
        color: '$textColorDefault',
      },
      critical: {
        color: '$textColorDefault',
      },
      success: {
        color: '$textColorDefault',
      },
      disabled: {
        opacity: 0.6,
      },
    },
  }
});

const StyledHelperText = styled('span', {
  fontFamily: '$helperText',
  fontSize: '$helperText',
  lineHeight: '$helperText',
  letterSpacing: '$helperText',
  fontWeight: '$helperText',
  hidden: false,
  variants: {
    state: {
      default: {
        color: '$textColorDefault',
      },
      critical: {
        color: '$textColorCritical',
      },
      success: {
        color: '$textColorSuccess',
      },
      disabled: {
        opacity: 0.6,
      },
    },
  }
});

/**
 * An Input is a form element that lets users enter one of various types of text on a single line.
 */
export const TextInput = ({
  state = 'default',
  showLabel = true,
  showHelperText = true,
  label = 'Label',
  helperText = 'Helper text',
  placeholder = 'Placeholder',
  type = 'text',
}: PropsWithChildren<Props>) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const id = nanoid();

  return (
    <Stack direction="column" gap="1">
      <StyledLabel
        htmlFor={id}
        aria-hidden={!showLabel}
        hidden={!showLabel}
        state={state}
      >
        {label}
      </StyledLabel>
      <StyledInput
        ref={inputRef}
        id={id}
        type={type}
        placeholder={placeholder}
        state={state}
        disabled={state === 'disabled'}
        aria-describedby={helperText ? `${id}-helper-text` : undefined}
      />
      <StyledHelperText
        id={`${id}-helper-text`}
        aria-hidden={!showHelperText}
        state={state}
        hidden={!showHelperText}
      >
        {helperText}
      </StyledHelperText>
    </Stack>
  );
};

export default TextInput;