import "./SignupForm.css";
import {useHistory} from "react-router-dom";
export const SignupForm = () => {
  const history = useHistory();

  function validateInputField(field, regex) {
    if(!regex.test(field.value))
    {
      field.className += "invalid";
      return false;
    }
    return true;
  }

  function onJoinButtonClicked() {
    const namePattern = /^[A-Z][a-z]*$/;
    const requiredAddressPattern = /^[a-zA-Z0-9, -]+$/;
    const optionalAddressPattern = /^(|[a-zA-Z0-9, -]+)$/;
    const zipCodePattern = /^[0-9]{6}$/;//Romanian ZIP Code
    const phonePattern = /^(\+)?[0-9 ]{7,15}$/;
    const emailPattern = /^[a-zA-Z0-9-_]+@[a-zA-Z]+\.[a-zA-Z]{2,5}$/;
    const inputs = Object.fromEntries(
        ["firstNameInput", "lastNameInput", "address1Input", "address2Input", "cityInput", "stateInput", "zipCodeInput",
        "phoneInput", "emailInput"]
            .map((val)=>[val, document.getElementById(val)])
    ); //To avoid repeating myself, I map the list of input ids to an object that has as keys the ids and as values the
    //DOM object
    //Assume at first that every field is correct by removing a potential "invalid" class
    for(const elem in inputs)
    {
      inputs[elem].className=inputs[elem].className.replace("invalid", "");
    }
    //To avoid repeated calls to the same function, one could group the inputs by the pattern they require, but in this
    //case, the amount of same pattern inputs is small enough
    const validationResult = [
      validateInputField(inputs["firstNameInput"], namePattern),
      validateInputField(inputs["lastNameInput"], namePattern),
      validateInputField(inputs["address1Input"], requiredAddressPattern),
      validateInputField(inputs["address2Input"], optionalAddressPattern),
      validateInputField(inputs["cityInput"], requiredAddressPattern),
      validateInputField(inputs["stateInput"], requiredAddressPattern),
      validateInputField(inputs["zipCodeInput"], zipCodePattern),
      validateInputField(inputs["phoneInput"], phonePattern),
      validateInputField(inputs["emailInput"], emailPattern)
    ]
        .find((value => value===false));
    if( validationResult !== false )
      //I need to check if any field does contain invalid data in them, but JS uses short-circuit evaluation, so I've used
      //  another approach that evaluates all operations, is easy to update (change the values in the array above), but
      //  might not be as readable. This is why I'm leaving this comment.
    {
      history.push("/finish");
    }
  }

  return (<div id={"signupForm"}>
    <h1>Application Form</h1>
    <div id={"joinform"}>
      <div id={"namesPart"}>
        <div className={"formInput required"}>
          <label>
            First Name:
          </label>
          <input placeholder={"First Name"} id={"firstNameInput"}/>
        </div>
        <div className={"formInput required"}>
          <label>
            Last Name:
          </label>
          <input placeholder={"Last Name"} id={"lastNameInput"}/>
        </div>
      </div>
      <h2>Address</h2>
      <div id={"addressPart"}>
        <div className={"formInput required"}>
            <label>
              Address line 1:
            </label>
            <input placeholder={"Street name & number"} id={"address1Input"}/>
          </div>
        <div className={"formInput"}>
            <label>
              Address line 2:
            </label>
            <input placeholder={"Suite, apartment"} id={"address2Input"}/>
          </div>
        <div id={"cityPart"}>
          <div className={"formInput required"}>
            <label>
              City:
            </label>
            <input placeholder={"Street name & number"} id={"cityInput"}/>
          </div>
          <div className={"formInput required"}>
            <label>
              State:
            </label>
            <select placeholder={"Street name & number"} id={"stateInput"}>
              <option key={""} disabled={true} defaultValue={""}/>
              <option key={"SV"}>Suceava</option>
              <option key={"CJ"}>Cluj</option>
              <option key={"IS"}>Iași</option>
            </select>
          </div>
          <div className={"formInput required"}>
            <label>
              Zip code:
            </label>
            <input placeholder={"Zip code"} id={"zipCodeInput"}/>
          </div>
        </div>
      </div>
      <h2>Contact information</h2>
      <div id={"contactPart"}>
        <div className={"formInput required"}>
          <label>
            Phone number:
          </label>
          <input placeholder={"555-5555"} id={"phoneInput"}/>
        </div>
        <div className={"formInput required"}>
          <label>
            Email address:
          </label>
          <input placeholder={"john@doe.com"} id={"emailInput"}/>
        </div>
      </div>
    </div>
    <button id={"submitJoin"} className={"JoinUsButton"} onClick={()=>{onJoinButtonClicked();}}>Join Us</button>
  </div>);
}
