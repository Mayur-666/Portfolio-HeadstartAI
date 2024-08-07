import React, { useEffect } from "react";
import {
  FaCode,
  FaHome,
  FaSuitcase,
  FaTrophy,
  FaUserGraduate,
} from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const location = useLocation()
  // when navigate to different outlet, scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  

  return (
    <div className="container">
      <div className="topbar">
        <p className="dot"></p>
        <p className="dot"></p>
        <p className="dot"></p>
      </div>
      <div className="header">MY PORTFOLIO</div>
      <div className="navbar">
        <i onClick={() => navigate("/")}>
          <FaHome />
        </i>
        <i onClick={() => navigate("/experience")}>
          <FaSuitcase />
        </i>
        <i onClick={() => navigate("/project")}>
          <FaCode />
        </i>
        <i onClick={() => navigate("/academic")}>
          <FaUserGraduate />
        </i>
        <i onClick={() => navigate("/certificate")}>
          <FaTrophy />
        </i>
        <i onClick={() => navigate("/skills")}>
          <FaSackDollar />
        </i>
      </div>
      <div className="content-body-container">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
