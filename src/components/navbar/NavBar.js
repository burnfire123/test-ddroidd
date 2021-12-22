import "./NavBar.css"
import DdroiddLogo from "../../assets/ddroidd_logo.svg";
import {JoinUsButton} from "../joinus-button/JoinUsButton";

export const NavBar = ()=>
{
    return (
      <nav id={"navbar"}>
          <img src={DdroiddLogo} alt={"Logo"}/>
          <h1>Winter Internship</h1>
          <JoinUsButton/>
      </nav>
    );
}
