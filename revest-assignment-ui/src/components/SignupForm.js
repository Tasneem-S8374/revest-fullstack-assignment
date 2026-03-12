import React from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import fields from "../data/fields.json";
import DynamicField from "./DynamicField";
import { saveForm } from "../utils/storage";

function SignupForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    saveForm(data);
    alert("Form Saved Successfully");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.data.map((field) => (
        <DynamicField key={field.id} field={field} register={register} />
      ))}

      <Button
        variant="contained"
        fullWidth
        type="submit"
        style={{ marginTop: "20px" }}
      >
        Submit
      </Button>
    </form>
  );
}

export default SignupForm;
