import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Schedule from "./pages/Schedule";
import Zoom from "./pages/Zoom";
import Mock from "./pages/Mock";
import Downloadable from "./pages/Downloadable";
import Videos from "./pages/Videos";
import Message from "./pages/Message";

import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/zoom" element={<Zoom />} />
        <Route path="/mock" element={<Mock />} />
        <Route path="/downloadable" element={<Downloadable />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/messages" element={<Message />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
