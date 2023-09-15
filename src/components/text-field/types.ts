import { ClipboardEventHandler, MouseEventHandler } from 'react';
import { Control } from 'react-hook-form';

export type CustomTextFieldProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any, any>;
  autoComplete?: string;
  name: string;
  errors?: object;
  isDisabled?: boolean;
  onCut?: ClipboardEventHandler<HTMLDivElement>;
  onCopy?: ClipboardEventHandler<HTMLDivElement>;
  onPaste?: ClipboardEventHandler<HTMLDivElement>;
  wrapperClass?: string;
  onClickTextField?: MouseEventHandler<HTMLDivElement> | undefined;
};