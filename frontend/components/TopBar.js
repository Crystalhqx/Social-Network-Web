import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { LogoutOutlined } from "@ant-design/icons";

function TopBar(props) {
  const { isLoggedIn, handleLogout } = props;
  return (
    <header className="App-header">
      <Link to="/" className="logo-link">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
      {isLoggedIn ? (
        <LogoutOutlined className="logout" onClick={handleLogout} />
      ) : (
        <div className="auth-buttons">
          <Link to="/login">
            <button className="login-button">Log in</button>
          </Link>
          <Link to="/register">
            <button className="signup-button">Sign up</button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default TopBar;
