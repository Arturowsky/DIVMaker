import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Font awesome for "Button brands"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// Font awesome for "Button brands"
const gitBtn = <FontAwesomeIcon icon={faGithub} className="gitIcon" />;
const Github = () => {
  return (
    <div className="github">
      <div className="githubInner">
        {gitBtn}
        <a href="https://github.com/Arturowsky/DIVMaker">
          https://github.com/Arturowsky/DIVMaker
        </a>
      </div>
    </div>
  );
};

export default Github;
