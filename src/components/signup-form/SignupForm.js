import "./SignupForm.css";
import {useHistory} from "react-router-dom";
export const SignupForm = () => {
  const history = useHistory();
  function onJoinButtonClicked() {
    history.push("/finish");
  }

  return (<div id={"signupForm"}>
    <h1>Application Form</h1>
    <div id={"joinform"}>
      <div id={"namesPart"}>
        <div className={"formInput required"}>
          <label>
            First Name:
          </label>
          <input placeholder={"First Name"}/>
        </div>
        <div className={"formInput required"}>
          <label>
            Last Name:
          </label>
          <input placeholder={"Last Name"}/>
        </div>
      </div>
      <h2>Address</h2>
      <div id={"addressPart"}>
        <div className={"formInput required"}>
            <label>
              Address line 1:
            </label>
            <input placeholder={"Street name & number"}/>
          </div>
        <div className={"formInput"}>
            <label>
              Address line 2:
            </label>
            <input placeholder={"Suite, apartment"}/>
          </div>
        <div id={"cityPart"}>
          <div className={"formInput required"}>
            <label>
              City:
            </label>
            <input placeholder={"Street name & number"}/>
          </div>
          <div className={"formInput required"}>
            <label>
              State:
            </label>
            <select placeholder={"Street name & number"}>
              <option key={"SV"}>Suceava</option>
              <option key={"CJ"}>Cluj</option>
              <option key={"IS"}>Iași</option>
            </select>
          </div>
          <div className={"formInput required"}>
            <label>
              Zip code:
            </label>
            <input placeholder={"Street name & number"}/>
          </div>
        </div>
      </div>
      <h2>Contact information</h2>
      <div id={"contactPart"}>
        <div className={"formInput required"}>
          <label>
            Phone number:
          </label>
          <input placeholder={"555-5555"}/>
        </div>
        <div className={"formInput required"}>
          <label>
            Email address:
          </label>
          <input placeholder={"john@doe.com"}/>
        </div>
      </div>
    </div>
    <button id={"submitJoin"} className={"JoinUsButton"} onClick={()=>{onJoinButtonClicked();}}>Join Us</button>
  </div>);
}
