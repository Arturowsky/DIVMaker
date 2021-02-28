import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import RangeSlider from "./RangeSlider";
import AnimatedLogo from "./AnimatedLogo";
import Github from "./Github";

// App Logo
import logo from "../src/3d-modeling32px.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Font awesome for "Button brands"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faHammer } from "@fortawesome/free-solid-svg-icons";

// Font awesome for "Button brands"
const gitBtn = <FontAwesomeIcon icon={faGithub} className="awsomeBtn" />;
const homeBtn = <FontAwesomeIcon icon={faHome} className="awsomeBtn" />;
const hammerBtn = <FontAwesomeIcon icon={faHammer} className="awsomeBtn" />;

export default function Rect() {
  return (
    <Router>
      <div>
        <nav>
          <div>
            {" "}
            <img src={logo} alt="Div Maker by arturowsky" />
            <h1>
              <span> DIV</span>Maker
            </h1>
          </div>
          <div className="btn-group">
            <Link to="/">
              <button>{homeBtn} Home</button>
            </Link>
            <Link to="/create">
              <button>{hammerBtn} Create</button>
            </Link>
            <Link to="/github">
              <button>{gitBtn} GitHub</button>
            </Link>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/github">
            <Github />
          </Route>
          <Route path="/create">
            <RangeSlider />
          </Route>

          <Route path="/">
            <AnimatedLogo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
