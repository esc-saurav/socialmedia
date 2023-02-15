import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./scenes/homepage/Index";
import ProfilePage from "./scenes/profilePage/Index";
import LoginPage from "./scenes/loginpage/Index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
