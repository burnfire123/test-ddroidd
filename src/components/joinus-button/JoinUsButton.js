import "./JoinUsButton.css";
import {useHistory} from "react-router-dom";
export const JoinUsButton = () => {
  const history = useHistory();
  function onJoinButtonClicked() {
    history.push("/ceva");
  }

  return <button className={"JoinUsButton"}
                 onClick={onJoinButtonClicked}
  >Join Us</button>;
}
