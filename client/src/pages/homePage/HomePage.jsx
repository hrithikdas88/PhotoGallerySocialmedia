import React from "react";
import { useDispatch } from "react-redux";
import { setLogout } from "store/authSlice";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(setLogout({ user: null, token: null }));
    navigate("/");
  };
  return (
    <div>
      <h1>Homepage</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
