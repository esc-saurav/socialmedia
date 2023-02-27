import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="shadow-md flex  items-center justify-around py-4">
        <p className="font-bold text-blue-500 text-3xl">SocialMedia</p>
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-500 text-white rounded-md px-4 py-1"
        >
          Login
        </button>
      </div>
      <Form />
    </div>
  );
};

export default LoginPage;
