import React from "react";
import UserImage from "../../components/UserImage";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserWidget = ({ userId, pictutePath }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);

  //   const getUser = async () => {
  //     try {
  //       const response = axios.get(`http://localhost:3001/users/${userId}`);
  //       setUser(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     getUser();
  //   }, []);

  //   if (!user) {
  //     return null;
  //   }

  //   const {
  //     firstName,
  //     lastName,
  //     location,
  //     occupation,
  //     viewedProfile,
  //     impressions,
  //     friends,
  //   } = user;

  return (
    <>
      <div>
        <div className="flex">
          <div className="flex ">
            <img src="" />
            <div className="flex flex-col">
              <p>name</p>
              <p>friends</p>
            </div>
          </div>
          <div>friends</div>
        </div>
        <hr></hr>
        <div className="flex flex-col">
          <div className="flex ">
            <div>logo</div>
            <div>text</div>
          </div>
          <div className="flex">
            <div>logo</div>
            <div>text</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <div>text</div>
            <div>num</div>
          </div>
          <div className="flex">
            <div>text</div>
            <div>num</div>
          </div>
          <div className="flex flex-col">
            <p>Social profile</p>
            <div className="flex ">
              <div className="flex">
                <div>twitter</div>
                <div className="flex flex-col">
                  <p>Twitter</p>
                  <p>Social media</p>
                </div>
                <div>pen</div>
              </div>
            </div>
            <div className="flex ">
              <div className="flex">
                <div>twitter</div>
                <div className="flex flex-col">
                  <p>Twitter</p>
                  <p>Social media</p>
                </div>
                <div>pen</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserWidget;
