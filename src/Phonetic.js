import React from "react";
import "./App.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        className="btn  btn-outline-primary m-1 py-1"
      >
        Listen
      </a>
      <span>{props.phonetic.text}</span>
    </div>
  );
}
