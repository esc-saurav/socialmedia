import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../navbar/Index";
import UserWidget from "../widgets/UserWidget";

const HomePage = () => {
  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <>
      <Navbar />
      <UserWidget userId={_id} pictutePath={picturePath} />
    </>
  );
};

export default HomePage;
