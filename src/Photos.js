import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            console.log(photo)
            return (
              <div key={index} > <a href={photo.src.original} target="_blank"> <img className="img-fluid" src={photo.src.landscape} alt={photo.src.alt} /> </a></div> 
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
