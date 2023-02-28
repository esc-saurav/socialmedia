import React from "react";
// import UserImage from "../../components/UserImage";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FriendsWidget from "./FriendsWidget";
import {
  LinkedInIcon,
  OcccupationIcon,
  PencilIcon,
  TwitterIcon,
  UserIcon,
} from "../../assets/svg";
import { LocationIcon } from "../../assets/svg";
import MyPostWidget from "./MyPostWidget";
import SponserWidget from "./SponserWidget";

const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);

  const getUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/users/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return null;
  }

  const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
  } = user;

  return (
    <>
      <div className="px-8 py-7 flex gap-8 ">
        <div className="w-[30%] py-3 px-4 border flex flex-col shadow-md rounded-md gap-2 h-1/2 sticky top-24">
          <div
            onClick={() => navigate(`/profile/${userId}`)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex gap-2 items-center">
              <img
                className="h-12 w-12 object-cover rounded-full"
                src={picturePath}
                // src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                alt=""
              />
              <div className="flex flex-col">
                <div className="flex gap-1">
                  <p>{firstName}</p>

                  <p>{lastName}</p>
                </div>
                <p className="text-sm text-slate-500">
                  {friends.length} friends
                </p>
              </div>
            </div>
            <UserIcon className="h-4 w-4 cursor-pointer" />
          </div>
          <hr></hr>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center ">
              <LocationIcon className="h-4 w-4" />
              <div className="text-sm text-slate-500">{location}</div>
            </div>
            <div className="flex gap-2 items-center">
              <OcccupationIcon className="h-4 w-4" />
              <div className="text-sm text-slate-500">{occupation}</div>
            </div>
          </div>
          <hr></hr>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-500">
                Who viewed your profie?
              </div>
              <div className="text-sm text-slate-500">{viewedProfile}</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-500">
                Impressions of your post
              </div>
              <div className="text-sm text-slate-500">{impressions}</div>
            </div>
            <hr></hr>

            <div className="flex flex-col gap-2">
              <p>Social profile</p>

              <div className="flex items-center justify-between">
                <div className="flex gap-4 items-center">
                  <LinkedInIcon className="h-6 w-6" />
                  <div className="flex flex-col">
                    <div className="text-sm">LinkedIn</div>
                    <div className="text-sm text-slate-500">Social Network</div>
                  </div>
                </div>
                <PencilIcon className="h-4 w-4 cursor-pointer" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-4 items-center">
                  <TwitterIcon className="h-6 w-6" />
                  <div className="flex flex-col">
                    <div className="text-sm">Twitter</div>
                    <div className="text-sm text-slate-500">Social Network</div>
                  </div>
                </div>
                <PencilIcon className="h-4 w-4 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%]">
          <MyPostWidget />
        </div>
        <div className="w-[30%] flex flex-col gap-4 h-[50%] sticky top-24 ">
          <SponserWidget />
          <FriendsWidget />
        </div>
      </div>
    </>
  );
};

export default UserWidget;
