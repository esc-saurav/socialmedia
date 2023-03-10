import React, { useState } from "react";
import {
  ClipboardIcon,
  ClipIcon,
  ImageIcon,
  AudioIcon,
} from "../../assets/svg";
import FeedWidget from "./FeedWidget";
import { setPosts } from "../../state";
import Dropzone from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const MyPostWidget = ({ picturePath }) => {
  const dispatch = useDispatch();
  const { _id } = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.token);
  const [post, setPost] = useState("");
  const [image, setImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    setImage(acceptedFiles[0]);
  };

  const handlePost = async () => {
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("description", post);
    formData.append("picture", image);
    formData.append("picturePath", image.name);

    const response = await axios.post(`http://localhost:3001/posts`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const posts = await response.json();
    dispatch(setPosts({ posts }));
    setPost("");
  };

  console.log(post);

  return (
    <div className="flex flex-col gap-4">
      <div className=" space-y-2 border h-44 shadow-md rounded-md  p-3">
        <div className="flex items-center gap-2">
          <img
            className="h-12 w-12 object-cover rounded-full"
            src={`http://localhost:5000/assets/${picturePath}`}
            alt=""
          />
          <input
            className="border bg-gray-200  h-10 w-full outline-none p-2 rounded-lg"
            type="text"
            placeholder="What's on your mind?"
            name="description"
            onChange={(e) => setPost(e.target.value)}
          />
        </div>
        <Dropzone onDrop={onDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} name="picture" />
              {image ? (
                <p>{image.name}</p>
              ) : (
                <div className="dotted h-10 text-slate-400 text-center cursor-pointer">
                  Drag and drop an image here, or click to select a file
                </div>
              )}
            </div>
          )}
        </Dropzone>
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
              onClick={handlePost}
              className="bg-blue-600 text-white rounded-xl px-4 py-1"
            >
              Post
            </button>
          </li>
        </ul>
      </div>
      <FeedWidget />
    </div>
  );
};

export default MyPostWidget;
