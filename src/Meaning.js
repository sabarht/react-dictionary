import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <section>
        <h2>{props.meaning.partOfSpeech}</h2>
        {props.meaning.definitions
          .slice(0, 3)
          .map(function (definition, index) {
            return (
              <div key={index}>
                <ul>
                  <li>{definition.definition}</li>
                </ul>
                <em>{definition.example}</em>
                <Synonyms synonyms={definition.synonyms} />
              </div>
            );
          })}
      </section>
    </div>
  );
}
