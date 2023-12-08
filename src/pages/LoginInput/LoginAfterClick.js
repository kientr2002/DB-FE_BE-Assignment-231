import { useState,useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import "./LoginAfterClick.css";

const LoginAfterClick = () => {
  const navigate = useNavigate();
  const onLoginTextClick = useCallback(() => {
    const username = document.getElementsByName("username")[0].value;
    const password = document.getElementsByName("password")[0].value;
    if(username=="admin" && password =="admin"){
      navigate('/home');
    } else {
      alert('Incorrect!');
    }

  }, []);
  return (
    <div className="login">
      <img className="illo-icon" alt="" src="/illo.svg" />
      <img className="illo-icon1" alt="" src="/illo1.svg" />
      <div className="cursor-labels">
        <img className="cursor-icon" alt="" src="/cursor.svg" />
      </div>
      <div className="shadow" />
      <div
        className="bounding-headline"
      >
        <div className="corner" />
        <div className="corner1" />
        <div className="corner2" />
        <div className="corner3" />
        <div className="loginsignup">Login</div>
      </div>
      <div className="cursor-labels1">
        <img className="cursor-icon1" alt="" src="/cursor1.svg" />
      </div>
      <div className="cursor-labels2">
        <div className="text">Name</div>
        <img className="cursor-icon2" alt="" src="/cursor2.svg" />
      </div>
      <div className="login-form">
        <img className="login-form-child" alt="" src="/rectangle-1.svg" />
        <div className="admin">
          <b className="login-button" onClick={onLoginTextClick}>
            Login
          </b>
        </div>
        <TextField
          className="input"
          color="primary"
          label="Username"
          sx={{ width: 350 }}
          variant="outlined"
          name="username"
        />
        <TextField
          className="input1"
          color="primary"
          label="Password"
          sx={{ width: 350 }}
          variant="outlined"
          name="password"
        />
        <div className="title">
          <b className="admin1">ADMIN</b>
        </div>
      </div>
    </div>
  );
};

export default LoginAfterClick;
