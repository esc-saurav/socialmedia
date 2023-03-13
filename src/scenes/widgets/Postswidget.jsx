import PostWidget from "./PostWidget";
import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setPosts } from "../../state";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Postswidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const Token = useSelector((state) => state.token);

  const getPosts = async () => {
    const response = await axios.get(`http://localhost:5000/posts`,
     {
      headers: { Authorization: `Bearer ${Token}` },
    });
    // const data = await response.json();
    const data = await response.data;
    dispatch(setPosts({ posts: data }));
  };

  const gerUserPosts = async () => {
    const response = await axios.get(
      `http://localhost:5000/posts/${userId}/posts`,
      {
        headers: { Authorization: `Bearer ${Token}` },
      }
    );
    const data = await response.data;
    dispatch(setPosts({ posts: data }));
  };

  useEffect(() => {
    if (isProfile) {
      gerUserPosts();
    } else {
      getPosts();
    }
  }, []);

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
