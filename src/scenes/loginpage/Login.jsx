import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    const formData = {
      email: data.email,
      password: data.password,
    };
    // formData.append("email", data.email);
    // formData.append("password", data.password);
    try {
      const response = await axios.post(
        "http://localhost:3001/auth/login",

        formData
      );

      const loggedIn = await response.data;
      if (loggedIn) {
        dispatch(
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token,
          })
        );
      }
      navigate("/home");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  return (
    <div>
      <div className="shadow-md text-center py-4">
        <p className="font-bold text-blue-500 text-3xl">SocialMedia</p>
      </div>
      <div className="py-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[55%] mx-auto py-4 border rounded-md px-8 "
        >
          <div className="flex flex-col space-y-2 items-center justify-center">
            <input
              className="border border-slate-400 outline-none h-9 rounded-sm"
              type="email"
              placeholder=" Email"
              name="email"
              {...register("email", {
                required: "email is required!",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid.",
                },
              })}
            />
            <p className="text-red-500 text-sm ml-2">{errors.email?.message}</p>
            <input
              className="border border-slate-400 outline-none h-9 rounded-sm"
              type="password"
              placeholder=" Password"
              {...register("password", {
                required: "password is required!",
                minLength: {
                  value: 8,
                  message: "Password must be more than eight.",
                },
              })}
            />
            <p className="text-red-500 text-sm">{errors.password?.message}</p>
            <button
              type="submit"
              className="bg-blue-500 outline-none text-white rounded-sm h-9 px-3 "
            >
              login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
