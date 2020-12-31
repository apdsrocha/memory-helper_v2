import React from "react";
import headerImg from "../images/header-img.png";

export default function Header() {
  return (
    <header className="header">
      <h1 className="h1-title">Memory Helper</h1>
      <h2 className="h2-title">
        Keep your daily memories focused on how you feel.
      </h2>
      <img alt="" className="img-header" src={headerImg} />
      <div className="header-wave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          strokeOpacity="0"
          fill="none"
        >
          <path
            fill="#fff"
            d="M0,160L40,176C80,192,160,224,240,218.7C320,213,400,171,480,160C560,149,640,171,720,192C800,213,880,235,960,208C1040,181,1120,107,1200,85.3C1280,64,1360,96,1400,112L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </header>
  );
}
