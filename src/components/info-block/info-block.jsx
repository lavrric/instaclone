import React from "react";
import "./info-block.scss";

const InfoBlock = () => (
  <div className="info-block">
    <div className="image-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(https://scontent-otp1-1.cdninstagram.com/v/t51.2885-19/s150x150/22638771_138322276895570_2661938283868585984_n.jpg?_nc_ht=scontent-otp1-1.cdninstagram.com&_nc_ohc=n8JMiK8aTqsAX8SQARX&oh=f5486e3da434cf2c6c33f5da31447164&oe=5F0CA129)`,
        }}
      />
    </div>
    <div className="text-container">
      <div className="title">ebsintegrator</div>
      <div className="pieces">
        <div className="piece">
          <span style={{ fontWeight: "500" }}>7</span> posts
        </div>
        <div className="piece">
          <span style={{ fontWeight: "500" }}>138</span> followers
        </div>
        <div className="piece">
          <span style={{ fontWeight: "500" }}>42</span> following
        </div>
      </div>
      <div className="followers">
        Followed by{" "}
        <span style={{ fontWeight: "500", color: "black" }}>
          lavrric, nibabin, andreeanicoara1, cutiiee3.14
        </span>{" "}
        +12 more
      </div>
    </div>
  </div>
);

export default InfoBlock;
