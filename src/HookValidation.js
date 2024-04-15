import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const HookValidation = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Your full name is reuired"),
    email: yup.string().email().required(),
    age: yup.number().typeError("Age must be a number").positive().integer().min(18).max(40).required("Age is required"),
    password: yup.string().required().min(4).max(20),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "passwords must match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(handleSubmit(onSubmit))}>
      <input type="text" placeholder="Full Name..." {...register("fullName")} />
      {/* <p>{errors.fullName?.message}</p> */}
      {errors.fullName && <p>{errors.fullName?.message}</p>}

      <input type="text" placeholder="Email" {...register("email")} />
      {errors.email && <p>{errors.email?.message}</p>}
      <input type="text" placeholder="Age..." {...register("age")} />
      {errors.age && <p>{errors.age?.message}</p>}
      <input
        type="password"
        placeholder="Password..."
        {...register("password")}
      />
      {errors.password && <p>{errors.password?.message}</p>}
      <input
        type="password"
        placeholder="Confirm Password..."
        {...register("confirmPassword")}
      />
      {errors.confirmPassword && <p>{errors.confirmPassword?.message}</p>}
      <input type="submit" />
    </form>
  );
};

export default HookValidation;
