import React from "react";
import {
  ClipboardIcon,
  ClipIcon,
  ImageIcon,
  AudioIcon,
} from "../../assets/svg";

const MyPostWidget = () => {
  return (
    <div className="w-2/5 space-y-2 border h-36 shadow-md rounded-md  p-3">
      <div className="flex items-center gap-2">
        <img
          className="h-12 w-12 object-cover rounded-full"
          // src={pictutePath}
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          alt=""
        />
        <input
          className="border bg-gray-200  h-10 w-full outline-none p-2 rounded-lg"
          type="text"
          placeholder="What's on your mind?"
        />
      </div>
      {/* <div>1</div> */}
      <hr></hr>
      <ul className="flex items-center justify-between w-full">
        <li>
          <span className="flex gap-1 items-center">
            <ImageIcon className="h-5 w-5" />
            <p className="text-sm text-slate-500">Image</p>
          </span>
        </li>
        <li>
          <span className="flex gap-1 items-center">
            <ClipboardIcon className="h-5 w-5" />
            <p className="text-sm text-slate-500">Clip</p>
          </span>
        </li>
        <li>
          <span className="flex gap-1 items-center">
            <ClipIcon className="h-5 w-5" />
            <p className="text-sm text-slate-500">Attachement</p>
          </span>
        </li>
        <li>
          <span className="flex gap-1 items-center">
            <AudioIcon className="h-5 w-5" />
            <p className="text-sm text-slate-500">Audio</p>
          </span>
        </li>
        <li>
          <button className="bg-blue-600 text-white rounded-xl px-4 py-1">
            Post
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MyPostWidget;
