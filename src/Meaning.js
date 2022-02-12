import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div>
      <h3>{props.meaning.partOfSpeach}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              {definition.example}
            </p>
          </div>
        );
      })}
    </div>
  );
}
