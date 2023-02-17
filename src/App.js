import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./scenes/homepage/Index";
import ProfilePage from "./scenes/profilePage/Index";
import LoginPage from "./scenes/loginpage/Index";
import Login from "./scenes/loginpage/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
