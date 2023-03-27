import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./scenes/homepage/Index";
import ProfilePage from "./scenes/profilePage/Index";
import LoginPage from "./scenes/loginpage/Index";
import Login from "./scenes/loginpage/Login";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

function App() {
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div className="font-rubik">
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/home"
            element={isAuth ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile/:userId"
            element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
