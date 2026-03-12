import React from "react";
import {
  TextField,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

function DynamicField({ field, register }) {
  if (field.fieldType === "TEXT") {
    return (
      <TextField
        fullWidth
        label={field.name}
        defaultValue={field.defaultValue}
        margin="normal"
        {...register(field.name, { required: field.required })}
      />
    );
  }

  if (field.fieldType === "LIST") {
    return (
      <TextField
        select
        fullWidth
        label={field.name}
        margin="normal"
        defaultValue=""
        {...register(field.name, { required: field.required })}
      >
        {field.listOfValues1.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    );
  }

  if (field.fieldType === "RADIO") {
    return (
      <FormControl margin="normal">
        <FormLabel>{field.name}</FormLabel>
        <RadioGroup>
          {field.listOfValues1.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option}
              control={<Radio />}
              label={option}
              {...register(field.name, { required: field.required })}
            />
          ))}
        </RadioGroup>
      </FormControl>
    );
  }

  return null;
}

export default DynamicField;
