import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { setFriends, setPosts } from "../../state";
import { CommentIcon, LikeIcon, RemoveFriendIcon } from "../../assets/svg";
import Friend from "./Friend";
import { useNavigate } from "react-router-dom";

const PostWidget = ({
  key,
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,
}) => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;

  //--------------------------------------------------
 
  const patchLike = async () => {
    const response = await axios.patch(
      `http://localhost:5000/posts/${postId}/like`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },

        body: JSON.stringify({ userId: loggedInUserId }),
      }
    );
    const updatedPost = await response.data;
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
              src={`http://localhost:5000/assets/${userPicturePath}`}
            />
            <div className="flex flex-col">
              <p className="text-sm">{name}</p>
              <p className="text-sm text-slate-600">{location}</p>
            </div>
          </div>
          <Friend
            friendsId={postUserId}
            name={name}
            subtitle={location}
            userPicturePath={userPicturePath}
          />
        </div>
        <div className="py-4 flex flex-col items-center ">
          <p className="text-sm">{description}</p>
          <img
            className="rounded-md w-full py-1"
            alt=""
            src={`http://localhost:5000/assets/${picturePath}`}
          />
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-1">
            <LikeIcon
              className={`cursor-pointer w-6 h-6 ${isLiked && "bg-blue-500 "}}`}
            />
            <p>{likeCount}</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <CommentIcon
              className={`cursor-pointer w-6 h-6 ${
                isComments && "text-blue-500 "
              }}`}
              onClick={() => setIsComments(!isComments)}
            />
            <p>{comments.length}</p>
          </div>
          {isComments && (
            <div>
              {comments.map((comment, i) => {
                return <div key={`${name}- ${i}`}>{comment}</div>;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostWidget;
