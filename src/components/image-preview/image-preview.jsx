import React from "react";
import "./image-preview.scss";

const ImagePreview = ({ item }) => (
  <div className="image-preview">
    <div
      className="background-image"
      style={{ backgroundImage: `url(${item.urls.small})` }}
    />
    <div className="overlay" />
  </div>
);

export default ImagePreview;
