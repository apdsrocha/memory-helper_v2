import React from "react";
import { Link } from "react-router-dom";

import about from "../images/icon-ask.png";
import read from "../images/icon-read.png";
import write from "../images/icon-write.png";

export default function Menu() {
  return (
    <nav className="nav">
      <ol className="nav-ol">
        <li className="nav-li flex-column">
          <figure>
            <Link className="flex-column" to="/entries">
              <img alt="" className="nav-img" src={read} />
              <figcaption className="nav-text">Entries</figcaption>
            </Link>
          </figure>
        </li>
        <li className="nav-li flex-column">
          <figure>
            <Link className="flex-column" to="/">
              <img alt="" className="nav-img" src={write} />
              <figcaption className="nav-text">Write</figcaption>
            </Link>
          </figure>
        </li>
        <li className="nav-li flex-column">
          <figure>
            <Link className="flex-column" to="/about">
              <img alt="" className="nav-img" src={about} />
              <figcaption className="nav-text">About</figcaption>
            </Link>
          </figure>
        </li>
      </ol>
    </nav>
  );
}
