import React from "react";
import {
  ClipboardIcon,
  ClipIcon,
  ImageIcon,
  AudioIcon,
} from "../../assets/svg";
import { setPosts } from "../../state";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../api/apiinstance";
import Postswidget from "./Postswidget";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const MyPostWidget = ({ picturePath }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { _id } = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.token);
 

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("description", data.description);
    formData.append("picture", data.picture[0]);
    formData.append("picturePath", data.picture[0].name);

    try {
      const response = await axios.post(`/posts`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const posts = await response.data;
      toast.success("Post Successful", {
        position: "bottom-right",
        style: {
          background: "#4BB543",
          color: "#fff",
        },
      });
      dispatch(setPosts({ posts }));
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong...", {
        position: "bottom-right",
        style: {
          background: "#ff0000",
          color: "#fff",
        },
      });
    }
    reset();
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" space-y-2 border h-44 shadow-md rounded-md  p-3"
      >
        <div className="flex items-center gap-2">
          <img
            className="h-12 w-12 object-cover rounded-full"
            src={`http://192.168.1.69:5000/assets/${picturePath}`}
            alt=""
          />
          <input
            className="border bg-gray-200  h-10 w-full outline-none p-2 rounded-lg"
            type="text"
            placeholder="What's on your mind?"
            name="description"
            {...register("description", { required: "desc required" })}
          />
          <p className="text-red-500 text-sm ml-2">
            {errors.description?.message}
          </p>
        </div>
        <input
          type="file"
          name="picture"
          {...register("picture", { required: "Picture required" })}
        />
        <p className="text-red-500 text-sm ml-2">{errors.picture?.message}</p>

        <hr></hr>
        <ul className="flex items-center justify-between w-full">
          <li>
            <span className="flex gap-1 items-center cursor-pointer">
              <ImageIcon className="h-5 w-5" />
              <p className="text-sm text-slate-500">Image</p>
            </span>
          </li>
          <li>
            <span className="flex gap-1 items-center cursor-pointer">
              <ClipboardIcon className="h-5 w-5" />
              <p className="text-sm text-slate-500">Clip</p>
            </span>
          </li>
          <li>
            <span className="flex gap-1 items-center cursor-pointer">
              <ClipIcon className="h-5 w-5" />
              <p className="text-sm text-slate-500">Attachement</p>
            </span>
          </li>
          <li>
            <span className="flex gap-1 items-center cursor-pointer">
              <AudioIcon className="h-5 w-5" />
              <p className="text-sm text-slate-500">Audio</p>
            </span>
          </li>
          <li>
            <button
              type="submit"
              className=" bg-blue-600 text-white rounded-xl px-4 py-1"
            >
              Post
            </button>
          </li>
        </ul>
      </form>
      <Postswidget />
    </div>
  );
};

export default MyPostWidget;
