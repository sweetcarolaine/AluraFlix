import { Link, useLocation } from "react-router-dom";
import { ArrowDropDown, Notifications } from '@mui/icons-material';
import "./Header.scss";
import logo from "/assets/logo.svg";

function Header() {
  const location = useLocation();
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="Aluraflix Logo" className="logo" />
        <nav>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Início
          </Link>
          <Link
            to="/new-video"
            className={location.pathname === "/new-video" ? "active" : ""}
          >
            Novo Vídeo
          </Link>
        </nav>
        <div className="profile">
          <Notifications className="icon"/>
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="auth">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
 