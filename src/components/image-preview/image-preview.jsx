import React from "react";
import "./image-preview.scss";

import { ReactComponent as Close } from "../../assets/close.svg";
import { ReactComponent as Prev } from "../../assets/prev.svg";
import { ReactComponent as Next } from "../../assets/next.svg";

const ImagePreview = ({
  item: { urls, description },
  show,
  selectPopup,
  closePopup,
  prev,
  next,
}) => {
  return (
    <>
      <div className="image-preview" onClick={selectPopup}>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${urls.small})` }}
        />
        <div className="overlay" />
      </div>
      {show ? (
        <div className="popup-container">
          <div className="close" onClick={closePopup}>
            <Close />
          </div>
          <div className="popup">
            <div className="prev" onClick={prev}>
              <Prev />
            </div>
            <img src={urls.regular} alt={description} />
            <div className="info">
              <div className="profile">
                <div
                  className="background-image"
                  style={{
                    backgroundImage: `url(https://scontent-otp1-1.cdninstagram.com/v/t51.2885-19/s150x150/22638771_138322276895570_2661938283868585984_n.jpg?_nc_ht=scontent-otp1-1.cdninstagram.com&_nc_ohc=n8JMiK8aTqsAX8SQARX&oh=f5486e3da434cf2c6c33f5da31447164&oe=5F0CA129)`,
                  }}
                />
                ebsintegrator · Following
              </div>
              <div className="description">
                <span style={{ fontWeight: "500" }}>ebsintegrator </span>
                {description
                  ? description
                  : "This photo was not given a description."}
              </div>
            </div>
            <div className="next" onClick={next}>
              <Next />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ImagePreview;
