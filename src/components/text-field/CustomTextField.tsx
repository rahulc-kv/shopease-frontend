import React, { FC } from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField";
import { isEmpty } from "lodash";
import { COLORS } from "constants/common";
import { CustomTextFieldProps } from "./types";

const textFieldCustomStyles = {
  "& label.Mui-focused": {
    color: COLORS.primary,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: COLORS.gray88,
      borderRadius: "5px",
      borderWidth: "1px",
    },
    "&.Mui-focused fieldset": {
      borderColor: COLORS.primary,
      borderRadius: "5px",
      borderWidth: "1px",
    },
  },
};

const CustomTextField: FC<CustomTextFieldProps & TextFieldProps> = (props) => {
  const {
    control,
    autoComplete = "",
    name = "",
    placeholder,
    rows,
    multiline,
    type = "text",
    errors,
    onCut = () => {},
    onCopy = () => {},
    onPaste = () => {},
    isDisabled = false,
    wrapperClass = "",
    onClickTextField,
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={`relative ${wrapperClass}`}>
          <TextField
            autoComplete={autoComplete}
            label={placeholder}
            rows={rows}
            multiline={multiline}
            error={Boolean(
              !isEmpty(errors) &&
                (errors[name] as { message?: string })?.message
            )}
            inputProps={{
              style: {
                height: "100%",
              },
            }}
            sx={textFieldCustomStyles}
            onCut={onCut}
            onCopy={onCopy}
            onPaste={onPaste}
            className="w-full"
            type={type}
            disabled={isDisabled}
            onClick={onClickTextField}
            {...field}
          />
          {!isEmpty(errors) &&
            (errors[name] as { message?: string })?.message && (
              <p className="mt-[4px] text-xs text-red">
                {(errors[name] as { message?: string })?.message}
              </p>
            )}
        </div>
      )}
    />
  );
};

export default CustomTextField;
