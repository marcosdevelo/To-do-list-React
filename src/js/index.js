//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { List } from "./component/List.js";

///import { ListNew } from "./component/ListNew.js";
//render your react application
ReactDOM.render(<List />, document.querySelector("#app"));
