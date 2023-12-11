import { useState,useCallback, useEffect } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import "./LoginAfterClick.css";
import api from "../../api/axiosConfig"

const LoginAfterClick = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onLoginTextClick = async () => {
    try {
      setLoading(true);
     const response = await api.post("/login", {
        username,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await response.data;

      if (result.code === "0000") {
        navigate('/member');
      } else {
        alert(result.message);
      }

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    
  };
  
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
            {loading ? "Logging in" : "Login"}
          </b>
        </div>
        <TextField
          className="input"
          color="primary"
          label="Username"
          sx={{ width: 350 }}
          variant="outlined"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          className="input1"
          color="primary"
          label="Password"
          type="password"
          sx={{ width: 350 }}
          variant="outlined"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="title">
          <b className="admin1">ADMIN</b>
        </div>
      </div>
    </div>
  );
};

export default LoginAfterClick;
