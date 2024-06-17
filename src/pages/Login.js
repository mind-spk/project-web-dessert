import React from "react";
import { useForm } from "react-hook-form";
import loginImage from "../assets/imgs/8b7755f7dae7baa3f764325b63586532.jpg";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-around ">
      <img className="" src={loginImage} alt="Login" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Login Page</h1>
          <label>Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
