import "./PresentationPage.css";
import DestructuringImage from "../../assets/destructuring.svg";
import WebPageLogo from "../../assets/WebPage_logo.svg";
import {JoinUsButton} from "../joinus-button/JoinUsButton";
export const PresentationPage = () => {
  return (<div id={"presentationPage"}>
    <div id={"top"}>
      <img src={DestructuringImage} alt={"Destructuring"}/>
      <img src={WebPageLogo} alt={"Web page logo"}/>
    </div>
    <JoinUsButton/>
  </div>);
}
