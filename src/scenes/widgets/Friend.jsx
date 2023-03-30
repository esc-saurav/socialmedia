import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFriends } from "../../state";
import { useSelector } from "react-redux";
import axios from "../../api/apiinstance";
import { RemoveFriendIcon } from "../../assets/svg";

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
  const dispatch = useDispatch;
  const { _id } = useSelector((state) => state.user);

  const Token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);
  // const isFriend = friends.find((friend) => friend._id === friendId);

  const patchFriend = async () => {
    try {
      const response = await axios.patch(`/users/${_id}/${friendId}`, {
        headers: { Authorization: `Bearer ${Token}` },
      });
      const data = await response.data;
      dispatch(setFriends({ friends: data }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="bg-blue-100 h-8 w-8 items-center rounded-full flex justify-center p-2 cursor-pointer ">
        <RemoveFriendIcon onClick={patchFriend} />
      </div>
    </div>
  );
};

export default Friend;
