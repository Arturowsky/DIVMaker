import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Font awesome for "Button brands"
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Font awesome for "Button brands"
const gitBtn = <FontAwesomeIcon icon={faGithub} className="awsomeBtn" />;
const NavLinks = () => {
  return (
    <div className="btn-group">
      <button>Start</button>
      <button>Create DIV</button>
      <button>Export</button>
      <button>{gitBtn} GitHub</button>
    </div>
  );
};
export default NavLinks;
