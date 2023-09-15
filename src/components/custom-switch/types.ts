/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent } from 'react';
import { Control } from 'react-hook-form';

export type CustomSwitchPropsType = {
  label?: string;
  checked?: boolean;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  control: Control<any, any>;
  name: string;
};
