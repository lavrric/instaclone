import React from "react";
import "./header.scss";

import { ReactComponent as Heart } from "../../assets/heart.svg";
import { ReactComponent as Home } from "../../assets/home.svg";

const Header = () => (
  <div className="header">
    <img
      src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
      alt="title"
      style={{
        cursor: "pointer",
      }}
    />
    <div className="options">
      <div className="option">
        <Home />
      </div>
      <div className="option">
        <Heart />
      </div>
      <div className="option">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(https://scontent-otp1-1.cdninstagram.com/v/t51.2885-19/s150x150/22638771_138322276895570_2661938283868585984_n.jpg?_nc_ht=scontent-otp1-1.cdninstagram.com&_nc_ohc=n8JMiK8aTqsAX8SQARX&oh=f5486e3da434cf2c6c33f5da31447164&oe=5F0CA129)`,
          }}
        />
      </div>
    </div>
  </div>
);

export default Header;
