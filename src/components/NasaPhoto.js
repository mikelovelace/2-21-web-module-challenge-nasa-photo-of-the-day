import React from "react";
import {StyledH1, StyledP, MainContainer, Photo} from "./NasaPhotoStyles"

function NasaPhoto(props) {
  const { data } = props;

  return (
    <div className="apod">
      <div className="top"><StyledH1>{data.title}</StyledH1></div>
      <MainContainer className="container">
      <div className="photo">
        <Photo src={data.url} alt={data.title}></Photo>
      </div>
      <div className="info">
        <div className="column"><StyledP>{data.explanation}</StyledP></div>
      </div>
      </MainContainer>
      <div className="column">{data.date}</div>
    </div>
  );
}

export default NasaPhoto;
