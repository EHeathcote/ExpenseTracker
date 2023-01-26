// importing reactDOM project from react-dom library which we have installed locally so a feature of the library can be used in index.js
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

// .createRoot()is a react method which tells react react where the user interface should be placed in the webpage that is loaded
// refers to the main page of the application with a in public/index.html which has div w ID root
const root = ReactDOM.createRoot(document.getElementById("root"));
// renders the App.js file as the root div in the index.html-JSX syntax
root.render(<App />);
