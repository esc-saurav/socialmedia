import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RemoveFriendIcon } from "../../assets/svg";
import { setFriends } from "../../state";
import { useSelector } from "react-redux";

const FriendsWidget = () => {
  const dispatch = useDispatch();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  const getFriends = async () => {
    const response = await axios.get(
      `http://localhost:5000/users/${_id}/friends`,
      {
        headers: { Authorization: `Bearer ${token}` },
        "content-type": "application/json",
      }
    );
    const data = await response.data;
    dispatch(setFriends({ friends: data }));
  };

  useEffect(() => {
    getFriends();
  });

  return (
    <div className="px-2">
      <div className="flex flex-col border p-4 rounded-md shadow-md space-y-2">
        <p className="text-sm font-[500]">Friend List</p>
        {friends.map((friend, index) => {
          return (
            <div key={index} className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                {/* <img
                  className="h-12 w-12 object-cover rounded-full"
                  src={`http://localhost:5000/assets/${friend.picturePath}`}
                  alt=""
                /> */}
                <div className="flex flex-col">
                  <p className="text-sm font-medium">{`${friend.firstName} ${friend.lastName}`}</p>
                  <p className="text-sm text-slate-400">{friend.subtitle}</p>
                </div>
              </div>
              <div
                // onClick={() => patchFriend()}
                className="bg-blue-100 h-8 w-8 items-center rounded-full flex justify-center p-2 cursor-pointer "
              >
                <RemoveFriendIcon />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FriendsWidget;
