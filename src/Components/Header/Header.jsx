import "./Header.css";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import decode from "jwt-decode";
import { useEffect, useState } from "react";

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  return (
    <header className="header">
      <div className="header_container">
        <div className="header_imageContainer">
          <img
            src="image/desktop.png"
            alt="Profile"
            className="header__image"
          />
          <p className="header__name">{user?.result?.displayName}</p>
        </div>
        <div>
          <p className="header__logout" onClick={logout}>
            Logout
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
