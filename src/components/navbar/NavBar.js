import "./NavBar.css"
import DdroiddLogo from "../../assets/ddroidd_logo.svg";
import {JoinUsButton} from "../joinus-button/JoinUsButton";
import {Link} from "react-router-dom";

export const NavBar = ()=>
{
    return (
      <nav id={"navbar"}>
          <Link to={"/"}>
              <img src={DdroiddLogo} alt={"Logo"}/>
          </Link>
          <h1>Winter Internship</h1>
          <JoinUsButton/>
      </nav>
    );
}
