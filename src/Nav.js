import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// App Logo
import logo from "../src/3d-modeling32px.png";

// NavLinks component
import NavLinks from "./NavLinks";

// Font awesome for "Button brands"
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Font awesome for "Button brands"
const gitBtn = <FontAwesomeIcon icon={faGithub} className="awsomeBtn" />;

const Nav = () => {
  return (
    <nav>
      <div>
        {" "}
        <img src={logo} alt="Div Maker by arturowsky" />
        <h1>
          <span> DIV</span>Maker
        </h1>
      </div>

      <NavLinks />
    </nav>
  );
};
export default Nav;
