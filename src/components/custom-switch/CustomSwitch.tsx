import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { FormControlLabel, Switch } from '@mui/material';

import { COLORS } from 'constants/common';
import { CustomSwitchPropsType } from './types';

const switchCustomStyles = {
  '& .MuiSwitch-switchBase': {
    color: COLORS.alabaster,
    '& + .MuiSwitch-track': {
      opacity: 0.3,
      backgroundColor: COLORS.black
    },
    '&.Mui-checked': {
      color: COLORS.primary,
      '& + .MuiSwitch-track': {
        opacity: 0.5,
        backgroundColor: COLORS.primary
      }
    }
  }
};

const CustmoSwitch: FC<CustomSwitchPropsType> = ({
  label,
  checked,
  handleChange = () => {},
  control,
  name
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ...restField } }) => (
        <FormControlLabel
          control={
            <Switch
              {...restField}
              checked={checked}
              onChange={e => {
                handleChange(e);
                onChange(e);
              }}
              sx={switchCustomStyles}
            />
          }
          label={label}
        />
      )}
    />
  );
};

export default CustmoSwitch;
