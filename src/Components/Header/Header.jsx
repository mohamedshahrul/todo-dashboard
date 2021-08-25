import { Avatar } from "@material-ui/core";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_imageContainer">
          <img
            src="image/desktop.png"
            alt="Profile"
            className="header__image"
          />
          <p className="header__name">Ali</p>
        </div>
        <div>
          <p className="header__logout">Logout</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
