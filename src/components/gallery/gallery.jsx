import React from "react";
import "./gallery.scss";

import ImagePreview from "../image-preview/image-preview";

const Gallery = ({ items }) => (
  <div className="gallery">
    {items
      .filter((item, i) => i < 9)
      .map((item) => (
        <ImagePreview item={item} />
      ))}
  </div>
);

export default Gallery;
