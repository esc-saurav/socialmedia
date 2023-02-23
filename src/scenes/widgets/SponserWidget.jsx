import React from "react";
import FriendsWidget from "./FriendsWidget";

const SponserWidget = () => {
  return (
    <div className=" flex flex-col border p-4 rounded-md shadow-md space-y-2">
      <div className="flex items-center justify-between ">
        <p className="font-medium">Sponsored</p>
        <p className="text-sm text-slate-500 cursor-pointer">Create Ad</p>
      </div>
      <img
        className="rounded-md"
        src="https://wappier.com/wp-content/uploads/2022/09/How-to-Start-Earning-Mobile-Game-Ad-Revenue-in-2022.png"
      />
      <div className="flex items-center justify-between">
        <p className="text-sm">Wappier</p>
        <p className="text-sm text-slate-500 cursor-pointer">wappier.com</p>
      </div>
      <p className="text-slate-500 text-sm">
        wappier is the leading revenue optimization and provider for mobile apps
        and games.
      </p>
    </div>
  );
};

export default SponserWidget;
