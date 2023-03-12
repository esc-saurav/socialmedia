import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../navbar/Index";
import MyPostWidget from "../widgets/MyPostWidget";
import UserWidget from "../widgets/UserWidget";
import FriendsWidget from "../widgets/FriendsWidget";
import PostWidget from "../widgets/PostWidget";

const HomePage = () => {
  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <>
      <Navbar />
      <UserWidget userId={_id} picturePath={picturePath} />
      {/* <PostWidget userId={_id} /> */}
    </>
  );
};

export default HomePage;
