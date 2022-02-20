export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <img src={photo.src.landscape} key={index} alt={photo.src.alt} />
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
