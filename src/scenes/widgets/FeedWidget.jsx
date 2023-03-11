import React from "react";
import { RemoveFriendIcon } from "../../assets/svg";

const FeedWidget = ({ picturePath }) => {
  return (
    <div className="flex items-center justify-between border rounded-md p-5 shadow-md">
      <div className="flex flex-col">
        <div className="flex justify-between gap-2">
          <div className="flex gap-3">
            <img
              className="h-10 w-10 object-cover rounded-full"
              src={`http://localhost:5000/assets/${picturePath}`}
              alt=""
            />
            <div className="flex flex-col">
              <p className="text-sm">Rajah Henderson</p>
              <p className="text-sm text-slate-600">New York, CA</p>
            </div>
          </div>
          <div className="bg-blue-100 h-8 w-8 items-center rounded-full flex justify-center p-2 cursor-pointer ">
            <RemoveFriendIcon />
          </div>
        </div>
        <div className="py-4 flex flex-col items-center ">
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            quibusdam nostrum quia.
          </p>
          <img
            className="rounded-md w-full py-1"
            src="https://plus.unsplash.com/premium_photo-1669998297585-e0ceaab884bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default FeedWidget;
