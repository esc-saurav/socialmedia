import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("location", data.location);
    formData.append("occupation", data.occupation);
    formData.append("password", data.password);
    formData.append("email", data.email);
    formData.append("picture", data.picture[0]);
    formData.append("picturePath", data.picture[0].name);

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/register",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      toast.success("Registration Successful", {
        position: "bottom-right",
        style: {
          background: "#4BB543",
          color: "#fff",
        },
      });
    } catch (error) {
      console.log(error);
      toast.error("Registration Failed", {
        position: "bottom-right",
        style: {
          background: "#ff0000",
          color: "#fff",
        },
      });
    }
    reset();
    navigate("/login");
  };

  return (
    <div className="py-4 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[55%] mx-auto space-y-2 py-4 border shadow-md rounded-md px-8 "
      >
        <p className="font-bold">Welcome to socialMedia app!</p>
        <div className="flex flex-col gap-4 ">
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                className="border border-slate-400 outline-none h-9 rounded-sm w-full"
                type="text"
                placeholder=" First Name"
                name="firstName"
                {...register("firstName", {
                  required: "FirstName is required!",
                })}
              />
              <p className="text-red-500 text-sm ml-2">
                {errors.firstName?.message}
              </p>
            </div>
            <div className="flex-1">
              <input
                className="border border-slate-400 outline-none h-9 rounded-sm w-full"
                type="text"
                placeholder=" Last Name"
                name="lastName"
                {...register("lastName", {
                  required: "lastName is required!",
                })}
              />
              <p className="text-red-500 text-sm ml-2">
                {errors.lastName?.message}
              </p>
            </div>
          </div>
          <input
            className="border border-slate-400 outline-none h-9 rounded-sm"
            type="text"
            placeholder=" Location"
            name="location"
            {...register("location", {
              required: "location is required!",
            })}
          />
          <p className="text-red-500 text-sm ml-2">
            {errors.location?.message}
          </p>
          <input
            className="border border-slate-400 outline-none h-9 rounded-sm"
            type="text"
            placeholder=" Occupation"
            name="occupation"
            {...register("occupation", {
              required: "occupation is required!",
            })}
          />{" "}
          <p className="text-red-500 text-sm ml-2">
            {errors.occupation?.message}
          </p>
          <input
            type="file"
            name="picture"
            {...register("picture", {
              required: "picture is required!",
            })}
          />
          <p className="text-red-500 text-sm ml-2">{errors.photo?.message}</p>
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
            className="bg-blue-500 outline-none text-white rounded-sm h-9 "
          >
            Register
          </button>
          <Link
            to="/login"
            className="text-sm text-blue-600 underline cursor-pointer"
          >
            Already Have an account? Login here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
