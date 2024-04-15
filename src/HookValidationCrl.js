import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";


// Define Yup schema for validation
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  age:yup.required("")
});

function HookValidationCrl() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
  };

  // console.log('errors-->',errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField {...field} label="Email" error={!!errors.email} helperText={errors.email?.message} />
        )}
      />
      <Controller
        name="age"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField {...field} label="Age" error={!!errors.age} helperText={errors.age?.message} />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField {...field} label="Password" type="password" error={!!errors.password} helperText={errors.password?.message} />
        )}
      />
      <Button type="submit" variant="contained" color="primary">Login</Button>
    </form>
  );
}

export default HookValidationCrl;
