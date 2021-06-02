import React from "react";
import Person from "./Person";

function Namelist() {
  const names = ["Bruce", "Clark", "Diana"];
  const persons = [
    { id: 1, name: "Ernest", age: 21, skill: "React" },
    { id: 2, name: "Kwame", age: 22, skill: "Angular" },
    { id: 3, name: "Amuzu", age: 23, skill: "Vue" },
  ];
  const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);
  return <div>{nameList}</div>;
}

export default Namelist;
