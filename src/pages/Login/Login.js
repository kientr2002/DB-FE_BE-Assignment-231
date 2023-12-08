import { useCallback } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const onBoundingHeadlineContainerClick = useCallback(() => {
    navigate('/login');
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
      <div className="admin-parent">
        <button className="button-style-disable">
          <div className="admin-login">
          <div className="driver" onClick={onBoundingHeadlineContainerClick}>Admin</div>
        </div>
        </button>
        <div className="admin2">
          <div className="driver">Driver</div>
        </div>
        <div className="admin3">
          <div className="driver">Shipper</div>
        </div>
        <div className="admin4">
          <div className="driver">Customer</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
