import React from "react";
import { RemoveFriendIcon } from "../../assets/svg";

const FriendsWidget = () => {
  return (
    <>
      <div className="flex flex-col border p-4 rounded-md shadow-md space-y-2 sticky top-24">
        <p className="text-sm font-[500]">Friend List</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img
              className="h-12 w-12 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt=""
            />
            <div className="flex flex-col">
              <p className="text-sm font-medium">Mike peterson</p>
              <p className="text-sm text-slate-400">Teacher</p>
            </div>
          </div>
          <div className="bg-blue-100 h-8 w-8 items-center rounded-full flex justify-center p-2 cursor-pointer ">
            <RemoveFriendIcon />
          </div>
        </div>
        {/* 2nd item */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img
              className="h-12 w-12 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt=""
            />
            <div className="flex flex-col">
              <p className="text-sm font-medium">Jane doe</p>
              <p className="text-sm text-slate-400">Hacker</p>
            </div>
          </div>
          <div className="bg-blue-100 h-8 w-8 items-center rounded-full flex justify-center p-2 cursor-pointer ">
            <RemoveFriendIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendsWidget;
