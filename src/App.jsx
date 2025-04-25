import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import upper, { text1, text2, text3 } from "./file1";
import person from "./file2";
import { males } from "./file2";
import { females } from "./file2";

import { Welcome, MultiWelcome } from "./file3";

function App() {
  const { firstName, email } = person;

  const combined = [...males, firstName, "Helle", ...females, "Tina"];
  console.log(combined);

  const personV2 = {
    ...person,
    phone: 123456,
    friends: [...males, ...females],
  };
  person.extra = "extra";

  console.log(personV2);

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
      <br />
      <br />
      <br />
      <h2>Ex 2</h2>
      <p>
        {firstName}: {email}
      </p>

      <h2>Ex 3</h2>
      <MultiWelcome />
    </>
  );
}

export default App;
