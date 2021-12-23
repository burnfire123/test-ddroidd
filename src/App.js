import "./App.css"
import {NavBar} from "./components/navbar/NavBar";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import {PresentationPage} from "./components/presentation-page/PresentationPage";
import {SignupForm} from "./components/signup-form/SignupForm";
import {FinishPage} from "./components/finish-page/FinishPage";

/*No hard feelings, but React routing is not cool at all. 2 big libraries with almost the same name, which have changes
* in their function names, no documentation for the lastest version*/

function App() {
  return (
    <BrowserRouter>

        <div>
            <NavBar/>
            <main id={"appBackground"}>
                <Switch>
                    <Route exact path={"/"}><PresentationPage/></Route>
                    <Route path={"/join"}><SignupForm/></Route>
                    <Route path={"/finish"}><FinishPage/></Route>
                    <Route path={"*"}><h1 style={{color: "red"}}>404! This page isn't found!</h1> </Route>
                </Switch>
            </main>
        </div>
    </BrowserRouter>
  );
}

export default App;
