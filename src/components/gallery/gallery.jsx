import React, { useState } from "react";
import "./gallery.scss";

import ImagePreview from "../image-preview/image-preview";

const Gallery = ({ items }) => {
  const [selectedOption, selectOption] = useState(0);
  const [selectedId, selectId] = useState(-1);

  console.log("hmm", selectedId);

  return (
    <div className="gallery">
      <div className="gallery-menu">
        <div
          className={`option ${selectedOption === 0 ? "selected" : ""}`}
          onClick={() => selectOption(0)}
        >
          POSTS
        </div>
        <div
          className={`option ${selectedOption === 1 ? "selected" : ""}`}
          onClick={() => selectOption(1)}
        >
          TAGGED
        </div>
      </div>
      {items
        .filter((item, i) => (selectedOption === 0 ? i < 7 : i >= 7))
        .map((item, i) => (
          <ImagePreview
            key={i}
            item={item}
            show={selectedId === i ? true : false}
            prev={() => selectId(i !== 0 && i !== 7 ? i - 1 : i)}
            next={() => selectId(i !== 6 && i !== 9 ? i + 1 : i)}
            selectPopup={() => selectId(i)}
            closePopup={() => selectId(-1)}
          />
        ))}
    </div>
  );
};

export default Gallery;
