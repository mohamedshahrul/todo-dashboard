import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login__contents"></div>
      <p className="login__title">Login</p>
      <form>
        <input type="text" placeholder="Id" className="login__id" />
        <input type="text" placeholder="Name" className="login__name" />
        <button type="submit" className="login__button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
