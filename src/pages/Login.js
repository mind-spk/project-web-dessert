import React from "react";
import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex bg-login w-full h-screen py-5 pl-[150px]">
      <div className="flex items-center min-w-10 p-[10px] ml-[150px]">
        <div>
          <form
            className="flex flex-col items-center p-10 shadow-md w-[390px] fix-h-[580px] text-white rounded-[35px] backdrop-blur-[90px] bg-white/10"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="text-white font-semibold text-4xl mb-4 text-center mt-[15px]">
              Login
            </h2>

            <div className="mt-10 mb-4">
              <input
                type="text"
                className="bg-transparent border-b-2 border-black-500 w-[280px] px-3 py-2 placeholder:text-white"
                placeholder="Email"
                {...register("email", {
                  required: " * ไม่ใช่รูปเเบบอีเมล",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: " * ไม่ใช่รูปเเบบอีเมล",
                  },
                })}
              />
              {errors.email && (
                <p className="w-[300px] text-wrap text-sm text-red-500 mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <input
                type="password"
                className="bg-transparent border-b-2 border-black-500 w-[280px] px-3 py-2 text-white placeholder:text-white placeholder-slate-400"
                placeholder="Password"
                {...register("password", {
                  required: "* รหัสผ่านควรมีความยาว 8 ตัวอักษรขึ้นไป , ตัวอักษร (a-z, A-Z) , ตัวเลข (0-9) , เเละตัวอักษรพิเศษ",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
                    message: "* รหัสผ่านควรมีความยาว 8 ตัวอักษรขึ้นไป , ตัวอักษร (a-z, A-Z) , ตัวเลข (0-9) , เเละตัวอักษรพิเศษ",
                  },
                })}
              />
              {errors.password && (
                <p className="w-[300px] text-wrap text-sm text-red-500 mt-2">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-[180px] h-[45px] bg-blue-600 text-white py-2 rounded-[30px] hover:bg-blue-400 mt-[30px]"
            >
              Login
            </button>

            <div className="mt-5">
              <input className="mr-3" type="checkbox" />
              <label htmlFor="scales">Remember my Username</label>
            </div>

            <div className="flex justify-around gap-8 mt-10 text-3xl font-semibold">
              <FaFacebook />
              <BiLogoGmail />
            </div>
            <Link className="mt-5 hover:text-slate-400 mb-5" to="/register">
              Create new account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
