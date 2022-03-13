import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        
        <div className="row">
          {props.photos.map(function (photo, index) {
            console.log(photo)
            return (
              <div key={index} className="col-4" > <a href={photo.src.original} target="_blank" rel="noreferrer"> <img className="img-fluid" src={photo.src.landscape} alt={photo.src.alt} /> </a></div> 
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
