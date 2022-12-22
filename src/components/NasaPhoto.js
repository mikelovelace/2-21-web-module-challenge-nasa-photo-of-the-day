import React from "react";

function NasaPhoto(props) {
  const { data } = props;
  return (
    <div className="apod">
      <div className="container">
        <h1>{data.title}</h1>
        <img src={data.url} alt={data.title} />
      </div>
      <div className="info">
        <div className="column">{data.date}</div>
        <div className="column">{data.explanation}</div>
        <div className="column">{data.copyright}</div>
      </div>
    </div>
  );
}

export default NasaPhoto;
