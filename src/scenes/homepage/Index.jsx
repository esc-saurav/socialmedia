import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../navbar/Index";
import MyPostWidget from "../widgets/MyPostWidget";
import UserWidget from "../widgets/UserWidget";
// import SponserWidget from "../widgets/SponserWidget";
import FriendsWidget from "../widgets/FriendsWidget";

const HomePage = () => {
  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <>
      <Navbar />
      <div className="grid md:grid-cols-3 py-8 gap-4 ">
        <UserWidget userId={_id} picturePath={picturePath} />
        <MyPostWidget picturePath={picturePath} />
        <div className="">
          {/* <SponserWidget /> */}
          <FriendsWidget/>
        </div>
      </div>
    </>
  );
};

export default HomePage;
