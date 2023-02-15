import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { SearchIcon } from "../../assets/svg/index";
import { SunIcon } from "../../assets/svg/index";
import { BellIcon } from "../../assets/svg/index";
import { ChatIcon } from "../../assets/svg/index";
import { WhatIcon } from "../../assets/svg/index";
import { HamburgerIcon } from "../../assets/svg/index";

const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);

  // const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <nav className="shadow-md">
      <div className="py-4 flex justify-between items-center lg:w-11/12 mx-auto px-4">
        <div className="flex gap-5 items-center">
          <h1 className="text-2xl font-bold text-blue-600">SocialMedia</h1>
          <div className="md:flex hidden items-center relative ">
            <input
              className="border bg-gray-200  h-10 w-60 outline-none p-2 rounded-lg"
              type="text"
              placeholder=" search"
            />
            <SearchIcon className="h-6 w-6 absolute right-4 cursor-pointer text-slate-600 " />
          </div>
        </div>
        <div className="md:flex items-center gap-7 hidden">
          <div className="flex gap-6 items-center">
            <SunIcon className="h-6 w-6" />
            <ChatIcon className="h-6 w-6" />
            <BellIcon className="h-6 w-6" />
            <WhatIcon className="h-6 w-6" />
          </div>
          <select className="bg-gray-200 rounded-sm w-32 h-10 outline-none p-2 cursor-pointer">
            <option>Fake name</option>
            <option>GG</option>
          </select>
        </div>
        <HamburgerIcon
          onClick={() => setIsMobileMenu((prev) => !prev)}
          className="h-6 w-6 md:hidden block"
        />
      </div>
      <div>
        {isMobileMenu && (
          <div
            className={`w-36 font-oswald bg-white z-50 fixed flex flex-col animation shadow-lg h-screen overflow-y-auto top-20 md:hidden ${
              isMobileMenu ? "right-0" : "-right-64"
            }`}
          >
            <div className="flex flex-col  gap-4 items-center">
            <SunIcon className="h-5 w-5" />
            <ChatIcon className="h-5 w-5" />
            <BellIcon className="h-5 w-5" />
            <WhatIcon className="h-5 w-5" />
          </div>
          <div className="p-4">
            <select className="bg-gray-200 rounded-sm  h-10 outline-none p-2 cursor-pointer">
              <option>Fake name</option>
              <option>GG</option>
            </select>
          </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
