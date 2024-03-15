import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "@/assets/Home.png";

import "./styles.css";

const HomeButtons = () => {
  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate("/");
  };

  return (
    <React.Fragment>
      <img src={Home} onClick={handleHomePage} className="home-button" />
    </React.Fragment>
  );
};

export default HomeButtons;
