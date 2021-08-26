import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { signIn, signUp } from "../../actions/auth";
import { useHistory } from "react-router";

const initialState = {
  id: "",
  name: "",
};

function Login() {
  const [formData, setFormData] = useState(initialState);
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const switchMode = () => {
    setIsSignUp((prevSignUp) => !prevSignUp);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signUp(formData, history));
    } else {
      dispatch(signIn(formData, history));
    }
  };

  return (
    <div className="login">
      <p className="login__title"> {isSignUp ? "Sign Up" : "Login"}</p>
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          name="id"
          type="text"
          placeholder="Id"
          className="login__id"
          onChange={handleChange}
        />
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="login__name"
          onChange={handleChange}
        />
        <button type="submit" className="login__button">
          {isSignUp ? "Sign Up" : "Login"}
        </button>
        <p onClick={switchMode} className="toggle__button">
          {isSignUp ? "Login" : "Sign Up"}
        </p>
      </form>
    </div>
  );
}

export default Login;
