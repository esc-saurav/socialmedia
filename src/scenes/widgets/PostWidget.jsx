import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { setPosts } from "../../state";
import { RemoveFriendIcon } from "../../assets/svg";



const PostWidget = (
  key,
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments
) => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;

  const patchLike = async () => {
    const response = await axios.patch(
      `http://localhost:5000/posts/${postId}/like`,
      {
        headers: { Authorization: `Bearer ${token}` },
        "Content-Type": "application/json",
        body: JSON.stringify({ userId: loggedInUserId }),
      }
    );
    const updatedPost = await response.json();
    dispatch(setPosts({ posts: updatedPost }));
  };

  return (
    <div className="flex items-center justify-between border rounded-md p-5 shadow-md">
      <div className="flex flex-col">
        <div className="flex justify-between gap-2">
          <div className="flex gap-3">
            <img
              alt=""
              className="h-10 w-10 object-cover rounded-full"
              src={`http://localhost:5000/assets/${picturePath}`}
            />
            <div className="flex flex-col">
              <p className="text-sm">{name}</p>
              <p className="text-sm text-slate-600">{location}</p>
            </div>
          </div>
          <div className="bg-blue-100 h-8 w-8 items-center rounded-full flex justify-center p-2 cursor-pointer ">
            <RemoveFriendIcon />
          </div>
        </div>
        <div className="py-4 flex flex-col items-center ">
          <p className="text-sm">
            {description}
          </p>
          <img
            className="rounded-md w-full py-1"
            alt=""
            src="https://plus.unsplash.com/premium_photo-1669998297585-e0ceaab884bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default PostWidget;
