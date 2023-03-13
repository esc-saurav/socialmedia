import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../navbar/Index";
import MyPostWidget from "../widgets/MyPostWidget";
import UserWidget from "../widgets/UserWidget";
import FriendsWidget from "../widgets/FriendsWidget";
import PostWidget from "../widgets/PostWidget";
import SponserWidget from "../widgets/SponserWidget";

const HomePage = () => {
  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-3 py-4  px-5">
        <UserWidget userId={_id} picturePath={picturePath} />
        <MyPostWidget picturePath={picturePath} />
        <div className="flex flex-col w-11/12 mx-auto">
          <SponserWidget />
          <FriendsWidget />
        </div>
      </div>
    </>
  );
};

export default HomePage;
