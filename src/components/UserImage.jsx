import React from "react";

const UserImage = ({ image }) => {
  return (
    <div>
      <img
        className="rounded-full object-cover"
        src={`https://localhost:3001/assets/${image}`}
      />
    </div>
  );
};

export default UserImage;
