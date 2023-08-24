import "./topbar.scss";
import { Person, Email } from "@mui/icons-material";

export default function TopBar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            YAB.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+1 849 226 0813</span>
          </div>
          <div className="itemContainer">
            <Email className="icon" />
            <span>yacevedo170@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
