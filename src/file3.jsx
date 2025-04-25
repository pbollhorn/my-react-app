import React from "react";
import { persons } from "./file2";

export function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export function MultiWelcome() {
  return (
    <>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edith" />
      <WelcomePerson person={persons[0]} />
      <WelcomePerson person={persons[1]} />
      <WelcomePerson person={persons[2]} />
      <br />
      <br />
      {persons.map((p) => (
        <WelcomePerson key={p.id} person={p} />
      ))}
    </>
  );
}

export function WelcomePerson(props) {
  return (
    <>
      <p>
        Hello, {props.person.firstName} {props.person.lastName} (
        {props.person.email})
      </p>
      <br />
    </>
  );
}
