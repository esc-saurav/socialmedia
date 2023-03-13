import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFriends } from "../../state";
import { useSelector } from "react-redux";
import axios from "axios";
import { RemoveFriendIcon } from "../../assets/svg";

const Friend = ({ friendsId }) => {
  const dispatch = useDispatch;
  const navigate = useNavigate;
  const token = useSelector((state) => state.token);
  const { _id } = useSelector((state) => state.user);
  const friends = useSelector((state) => state.user.friends);
  const isFriend = friends.find((friends) => friends._id === friendsId);

  const patchFriend = async () => {
    const response = await axios.patch(
      `http://localhost:5000/users/${_id}/${friendsId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
        "content-type": "application/json",
      }
    );
    const data = await response.data;
    dispatch(setFriends({ friends: data }));
  };
  return (
    <div>
      <div className="bg-blue-100 h-8 w-8 items-center rounded-full flex justify-center p-2 cursor-pointer ">
        <RemoveFriendIcon onClick={()=> patchFriend()} />
      </div>
    </div>
  );
};

export default Friend;
