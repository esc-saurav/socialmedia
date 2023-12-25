import PostWidget from "./PostWidget";
import React from "react";
import { useDispatch } from "react-redux";
import { setPosts } from "../../state";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "../../api/apiinstance";

const Postswidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const Token = useSelector((state) => state.token);

  const getPosts = async () => {
    const response = await axios.get(`/posts`, {
      headers: { Authorization: `Bearer ${Token}` },
    });
    const data = await response.data;
    dispatch(setPosts({ posts: data }));
  };

  const gerUserPosts = async () => {
    const response = await axios.get(`/posts/${userId}/posts`, {
      headers: { Authorization: `Bearer ${Token}` },
    });
    const data = await response.data;
    dispatch(setPosts({ posts: data }));
  };

  useEffect(() => {
    if (isProfile) {
      gerUserPosts();
    } else {
      getPosts();
    }
  });

  return (
    <>
      {posts.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }) => (
          <PostWidget
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${firstName} ${lastName}`}
            description={description}
            location={location}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
          />
        )
      )}
    </>
  );
};

export default Postswidget;
