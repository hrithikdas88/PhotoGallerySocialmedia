import React from "react";
import { useDispatch } from "react-redux";
import { setLogout } from "store/authSlice";
import { useNavigate } from "react-router-dom";
import './HomePage.scss'

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(setLogout({ user: null, token: null }));
    navigate("/");
  };
  return (
    <div className="main-div">
      <div className="profile-message">
        <div className="profile">
          <h1>profile</h1>
        </div>
        <div className="message">
          <h1>message</h1>
        </div>
      </div>
      <div className="addpost-feed">
        <div className="addpost">
          <h1>addpost</h1>
        </div>
        <div className="feed">
          <h1>feed</h1>
        </div>
      </div>
      <div className="friend-list">
        <div className="freindlist">
          <h1>friendlist</h1>
        </div>
      </div>
     
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
