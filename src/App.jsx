import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import upper, { text1, text2, text3 } from "./file1";

function App() {
  // alert(upper(text3));

  return (
    <>
      <h2>Ex 1</h2>
      <p>hallo</p>
      <p>upper("please uppercase me")</p>
      <p>{upper("please uppercase me")}</p>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <p>{upper(text3)}</p>
    </>
  );
}

export default App;
