import React from "react";
import { Fragment, Component } from "react";
// import gsap from "gsap";

// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Font awesome for advanced "Shadow options"
import {
  faArrowsAltH,
  faArrowsAltV,
  faSortAmountDown,
  faDotCircle,
} from "@fortawesome/free-solid-svg-icons";

// Font awesome for "Range sliders"
import {
  faBrush,
  faPalette,
  faAdjust,
  faRulerCombined,
  faPencilRuler,
  faSync,
  faCloud,
  faBalanceScale,
  faExpandAlt,
  faIcicles,
} from "@fortawesome/free-solid-svg-icons";

// Font awesome for "Button brands"
import {
  faHtml5,
  faCss3Alt,
  // faGithub,
} from "@fortawesome/free-brands-svg-icons";

const htmlAwsome = <FontAwesomeIcon icon={faHtml5} color="whitesmoke" />;
const cssAwsome = <FontAwesomeIcon icon={faCss3Alt} color="whitesmoke" />;
// const logoAwsome = <FontAwesomeIcon icon={faSquare} color="Mediumslateblue" />;

// Font awesome for Shadow Options
const arrowsH = <FontAwesomeIcon icon={faArrowsAltH} className="awsome" />;
const arrowsV = <FontAwesomeIcon icon={faArrowsAltV} className="awsome" />;
const sortDown = <FontAwesomeIcon icon={faSortAmountDown} className="awsome" />;
const dotCircle = <FontAwesomeIcon icon={faDotCircle} className="awsome" />;

// Font awesome for "Range sliders"
const brushSec = (
  <FontAwesomeIcon icon={faBrush} className="awsome" title="siemano" />
);
const paletteSec = <FontAwesomeIcon icon={faPalette} className="awsome" />;
const adjustSec = <FontAwesomeIcon icon={faAdjust} className="awsome" />;
const arrowAltHSec = <FontAwesomeIcon icon={faArrowsAltH} className="awsome" />;
const arrowAltVSec = <FontAwesomeIcon icon={faArrowsAltV} className="awsome" />;
const rulerCombSec = (
  <FontAwesomeIcon icon={faRulerCombined} className="awsome" />
);
const pencilRulerSec = (
  <FontAwesomeIcon icon={faPencilRuler} className="awsome" />
);
const syncSec = <FontAwesomeIcon icon={faSync} className="awsome" />;
const cloudSec = <FontAwesomeIcon icon={faCloud} className="awsome" />;
const scaleSec = <FontAwesomeIcon icon={faBalanceScale} className="awsome" />;
const expandSec = <FontAwesomeIcon icon={faExpandAlt} className="awsome" />;
const iciclesSec = <FontAwesomeIcon icon={faIcicles} className="awsome" />;

const BorderType = [
  {
    label: "Solid",
    value: "solid",
  },
  {
    label: "Dashed",
    value: "dashed",
  },
  {
    label: "Dotted",
    value: "dotted",
  },
  {
    label: "Double",
    value: "double",
  },
  {
    label: "Groove",
    value: "groove",
  },
  {
    label: "Ridge",
    value: "ridge",
  },
  {
    label: "Inset",
    value: "inset",
  },
  {
    label: "Outset",
    value: "outset",
  },
];
// "RangeSlider" as a main App component
class RangeSlider extends Component {
  state = {
    red: 50,
    green: 150,
    blue: 189,
    hex: "#000000",
    opacity: 99,
    width: 100,
    height: 70,
    grayscale: 0,
    rotate: 0,
    borderRadius: 0,
    borderThickness: 0,
    borderColor: "#000000",
    borderType: "solid",

    borderTopSize: 0,
    borderTopType: "solid",
    borderTopColor: "#000000",

    borderBottomSize: 0,
    borderBottomType: "solid",
    borderBottomColor: "#000000",

    borderLeftSize: 0,
    borderLeftType: "solid",
    borderLeftColor: "#000000",

    borderRightSize: 0,
    borderRightType: "solid",
    borderRightColor: "#000000",

    borderCorners: false,

    boxShadowOpacity: 15,
    inputColorValue: 0,
    shadowRight: 0,
    shadowDown: 0,
    shadowBlur: 10,
    shadowSize: 10,
    shadowRed: 0,
    shadowGreen: 0,
    shadowBlue: 0,

    disabledSkew: true,
    skewX: 0,
    skewY: 0,

    perspectiveDisabled: true,
    perspective: 500,
    perspectiveX: 0,
    perspectiveY: 0,
    perspectiveXY: 0,

    disabledBlur: true,
    blur: 0,

    gridColumnsFirstVal: 20,
    gridColumnsSecondVal: 80,
    visibility: "",

    hide: "none",
    czeked: true,
  };
  //  RGB Red value
  Red(e) {
    this.setState({
      red: e.target.value,
    });
  }
  //  RGB Green value
  Green(e) {
    this.setState({
      green: e.target.value,
    });
  }
  //  RGB Blue value
  Blue(e) {
    this.setState({
      blue: e.target.value,
    });
  }
  //  Input color for background styling
  PrintColor(e) {
    const color = e.target.value;
    const r = parseInt(color.substr(1, 2), 16);
    const g = parseInt(color.substr(3, 2), 16);
    const b = parseInt(color.substr(5, 2), 16);
    this.setState({
      red: r,
      green: g,
      blue: b,
      hex: color,
    });
  }
  //  Set opacity/transparency
  Opacity(e) {
    this.setState({
      opacity: ("0" + e.target.value).slice(-2),
    });
  }
  //  Width value
  Width(e) {
    this.setState({
      width: e.target.value,
    });
  }
  //  Height value
  Height(e) {
    this.setState({
      height: e.target.value,
    });
  }
  //  Border radius value
  Radius(e) {
    this.setState({
      borderRadius: e.target.value,
    });
  }
  //  Border thickness value
  Thickness(e) {
    this.setState({
      borderTopSize: e.target.value,
      borderBottomSize: e.target.value,
      borderLeftSize: e.target.value,
      borderRightSize: e.target.value,
      borderThickness: (e.target.value * 4) / 4,
    });
  }
  //  Border color value
  BorderColor(e) {
    this.setState({
      borderTopColor: e.target.value,
      borderBottomColor: e.target.value,
      borderLeftColor: e.target.value,
      borderRightColor: e.target.value,
    });
  }
  //  Grayscale value
  Grayscale(e) {
    this.setState({
      grayscale: ("0" + e.target.value).slice(-2),
    });
  }
  //  Rotate value
  Rotate(e) {
    this.setState({
      rotate: e.target.value,
    });
  }
  //  Box shadow
  BoxShadow(e) {
    this.setState({
      boxShadowOpacity: ("0" + e.target.value).slice(-2),
    });
  }
  //  Box shadow options
  //  Box shadow background color
  ShadowBackground(e) {
    const color = e.target.value;
    const r = parseInt(color.substr(1, 2), 16);
    const g = parseInt(color.substr(3, 2), 16);
    const b = parseInt(color.substr(5, 2), 16);
    this.setState({
      shadowRed: r,
      shadowGreen: g,
      shadowBlue: b,
    });
  }
  //  Box shadow blur size
  ShadowOptionsBlur(e) {
    this.setState({
      shadowBlur: e.target.value,
    });
  }
  //  Box shadow size
  ShadowOptionsSize(e) {
    this.setState({
      shadowSize: e.target.value,
    });
  }
  //  Box shadow left-right value
  ShadowOptionsRight(e) {
    this.setState({
      shadowRight: e.target.value,
    });
  }
  //  Box shadow up-down value
  ShadowOptionsDown(e) {
    this.setState({
      shadowDown: e.target.value,
    });
  }
  //  Skew
  //  Skew checkbox control
  DisableSkew() {
    this.setState({
      disabledSkew: !this.state.disabledSkew,
      skewX: 0,
      skewY: 0,
    });
  }
  //  SkewX value
  SkewX(e) {
    this.setState({
      skewX: e.target.value,
    });
  }
  //  SkewY value
  SkewY(e) {
    this.setState({
      skewY: e.target.value,
    });
  }
  //  Perspective
  //  Perspective checkbox control
  DisablePerspective() {
    this.setState({
      perspectiveDisabled: !this.state.perspectiveDisabled,
      perspectiveX: 0,
      perspectiveY: 0,
    });
  }
  //  Perspective X value
  PerspectiveX(e) {
    this.setState({
      perspectiveX: e.target.value,
    });
  }
  //  Perspective Y value
  PerspectiveY(e) {
    this.setState({
      perspectiveY: e.target.value,
    });
  }
  //  Perspective X && Y value
  PerspectiveXY(e) {
    this.setState({
      perspectiveY: this.state.perspectiveXY,
      perspectiveX: this.state.perspectiveXY,
      perspectiveXY: e.target.value,
    });
  }
  //  Blur options
  //  Blur checkbox control
  DisableBlur() {
    this.setState({
      disabledBlur: !this.state.disabledBlur,
      blur: 0,
    });
  }
  //  Blur value
  Blur(e) {
    this.setState({
      blur: e.target.value,
    });
  }
  //  Navbar random button
  RandomOptions() {
    const randomHeight = Math.floor(Math.random() * (80 - 2)) + 2;
    const randomWidth = Math.floor(Math.random() * (100 - 2)) + 2;
    const randomColorsRed = Math.floor(Math.random() * (200 - 2)) + 2;
    const randomColorsGreen = Math.floor(Math.random() * (250 - 2)) + 2;
    const randomColorsBlue = Math.floor(Math.random() * (180 - 2)) + 2;
    const randomBorderRadius = Math.floor(Math.random() * (20 - 2)) + 2;
    this.setState({
      height: randomHeight,
      width: randomWidth,
      red: randomColorsRed,
      green: randomColorsGreen,
      blue: randomColorsBlue,
      borderRadius: randomBorderRadius,
      rotate: 0,
      blur: 0,
      boxShadow: 0,
      borderThickness: 0,
    });
  }

  handleBorderType(e) {
    this.setState({
      borderType: e.target.value,
      borderTopType: e.target.value,
      borderBottomType: e.target.value,
      borderLeftType: e.target.value,
      borderRightType: e.target.value,
    });
  }

  // Each border manipulation
  handleBorderTop(e) {
    this.setState({
      borderTopType: e.target.value,
    });
  }
  handleBorderTopColor(e) {
    this.setState({
      borderTopColor: e.target.value,
    });
  }

  handleBorderTopSize(e) {
    this.setState({
      borderTopSize: e.target.value,
    });
  }
  handleBorderBottom(e) {
    this.setState({
      borderBottomType: e.target.value,
    });
  }
  handleBorderBottomColor(e) {
    this.setState({
      borderBottomColor: e.target.value,
    });
  }
  handleBorderBottomSize(e) {
    this.setState({
      borderBottomSize: e.target.value,
    });
  }
  handleBorderLeft(e) {
    this.setState({
      borderLeftType: e.target.value,
    });
  }
  handleBorderLeftColor(e) {
    this.setState({
      borderLeftColor: e.target.value,
    });
  }
  handleBorderLeftSize(e) {
    this.setState({
      borderLeftSize: e.target.value,
    });
  }
  handleBorderRight(e) {
    this.setState({
      borderRightType: e.target.value,
    });
  }
  handleBorderRightColor(e) {
    this.setState({
      borderRightColor: e.target.value,
    });
  }
  handleBorderRightSize(e) {
    this.setState({
      borderRightSize: e.target.value,
    });
  }
  handleSettings() {
    this.setState({
      gridColumnsFirstVal: 0,
      gridColumnsSecondVal: 100,
    });
  }

  handleHide() {
    this.setState({
      hide: "grid",
      czeked: !this.state.czeked,
      // borderCorners: true, - not sure if i want it ON or OFF
      borderThickness: 0,
      borderRadius: 0,
      borderType: "",
    });
    if (this.state.czeked === false) {
      this.setState({
        hide: "none",
        borderCorners: false,
        borderTopColor: "#000000",
        borderBottomColor: "#000000",
        borderLeftColor: "#000000",
        borderRightColor: "#000000",
        borderTopSize: 0,
        borderBottomSize: 0,
        borderLeftSize: 0,
        borderRightSize: 0,
      });
    }
  }

  render() {
    const {
      red,
      green,
      blue,
      hex,
      opacity,
      width,
      height,
      borderRadius,
      borderThickness,
      borderColor,
      grayscale,
      rotate,
      boxShadowOpacity,
      shadowRight,
      shadowDown,
      shadowBlur,
      shadowSize,
      shadowRed,
      shadowGreen,
      shadowBlue,
      disabledSkew,
      skewX,
      skewY,
      perspectiveDisabled,
      perspective,
      perspectiveX,
      perspectiveY,
      perspectiveXY,
      disabledBlur,
      blur,
      borderType,
      borderTopSize,
      borderTopType,
      borderTopColor,
      borderBottomSize,
      borderBottomType,
      borderBottomColor,
      borderLeftSize,
      borderLeftType,
      borderLeftColor,
      borderRightSize,
      borderRightType,
      borderRightColor,
      borderCorners,
    } = this.state;

    return (
      <div>
        <div className="range">
          <div className="settings">
            <div className="settings-inner">
              <div className="rgbaControls">
                <div>
                  <label forhtml="red">
                    {brushSec} Red <span>{red}</span>
                  </label>
                  <input
                    id="red"
                    type="range"
                    min="0"
                    max="255"
                    value={red}
                    onChange={this.Red.bind(this)}
                  ></input>
                </div>
                <div>
                  <label forhtml="green">
                    {brushSec} Green <span>{green}</span>
                  </label>
                  <input
                    id="green"
                    type="range"
                    min="0"
                    max="255"
                    value={green}
                    onChange={this.Green.bind(this)}
                  ></input>
                </div>
                <div>
                  <label forhtml="blue">
                    {brushSec} Blue <span>{blue}</span>
                  </label>
                  <input
                    id="blue"
                    type="range"
                    min="0"
                    max="255"
                    value={blue}
                    onChange={this.Blue.bind(this)}
                  ></input>
                </div>
                <div>
                  <label forhtml="opacity">
                    {adjustSec} Opacity <span>{opacity}%</span>
                  </label>
                  <input
                    id="opacity"
                    type="range"
                    min="0"
                    max="99"
                    value={opacity}
                    onChange={this.Opacity.bind(this)}
                  ></input>
                </div>
              </div>

              <label forhtml="bgcolor">
                {paletteSec} Background color <span>{hex}</span>
              </label>
              <input
                id="bgcolor"
                type="color"
                onChange={this.PrintColor.bind(this)}
                value={hex}
              ></input>

              <div className="dimensions">
                <div className="dimensions_width">
                  <label forhtml="width">
                    {arrowAltHSec} Width <span>{width * 5}px</span>
                  </label>
                  <input
                    id="width"
                    type="range"
                    min="0"
                    max="100"
                    value={width}
                    onChange={this.Width.bind(this)}
                  ></input>
                </div>
                <div className="dimensions_height">
                  <label forhtml="height">
                    {arrowAltVSec} Height <span>{height * 5}px</span>
                  </label>
                  <input
                    id="height"
                    type="range"
                    min="0"
                    max="100"
                    value={height}
                    onChange={this.Height.bind(this)}
                  ></input>
                </div>
              </div>
              <div className="settings-separator"></div>
              <div className="setBorder">
                <div>
                  <label forhtml="borderRadius">
                    {rulerCombSec} Border radius <span>{borderRadius}%</span>
                  </label>
                  <input
                    disabled={borderCorners}
                    id="borderRadius"
                    type="range"
                    min="0"
                    max="50"
                    value={borderRadius}
                    onChange={this.Radius.bind(this)}
                  ></input>
                </div>
                <div>
                  <label forhtml="borderThickness">
                    {pencilRulerSec} Border thickness{" "}
                    <span>{borderThickness}px</span>
                  </label>
                  <input
                    disabled={borderCorners}
                    id="borderThickness"
                    type="range"
                    min="0"
                    max="50"
                    value={borderThickness}
                    onChange={this.Thickness.bind(this)}
                  ></input>
                </div>
                <div>
                  <label forhtml="borderColor">
                    {paletteSec} Border color <span>{borderColor}</span>
                  </label>
                  <input
                    disabled={borderCorners}
                    id="borderColor"
                    type="color"
                    hex={borderColor}
                    onChange={this.BorderColor.bind(this)}
                  ></input>
                </div>
                <div>
                  <label forhtml="borderType">{paletteSec} Border type</label>
                  <select
                    disabled={borderCorners}
                    value={borderType}
                    onChange={this.handleBorderType.bind(this)}
                  >
                    {BorderType.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <input
                  type="checkbox"
                  onChange={this.handleHide.bind(this)}
                ></input>
                <label forhtml="inset">Border corners styling</label>
              </div>
              <div
                className="setBorderIndividual"
                style={{ display: `${this.state.hide}` }}
              >
                <div className="setBorderControls">
                  <label forhtml="borderRightInd">{paletteSec} Top</label>
                  <input
                    type="color"
                    onChange={this.handleBorderTopColor.bind(this)}
                    value={borderTopColor}
                  ></input>
                  <input
                    type="number"
                    onChange={this.handleBorderTopSize.bind(this)}
                    value={borderTopSize}
                  ></input>
                  <select
                    value={borderTopType}
                    onChange={this.handleBorderTop.bind(this)}
                  >
                    {BorderType.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="setBorderControls">
                  <label forhtml="borderRightInd">{paletteSec} Bottom</label>
                  <input
                    type="color"
                    onChange={this.handleBorderBottomColor.bind(this)}
                    value={borderBottomColor}
                  ></input>
                  <input
                    type="number"
                    onChange={this.handleBorderBottomSize.bind(this)}
                    value={borderBottomSize}
                  ></input>
                  <select
                    value={borderBottomType}
                    onChange={this.handleBorderBottom.bind(this)}
                  >
                    {BorderType.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="setBorderControls">
                  <label forhtml="borderRightInd">{paletteSec} Left</label>
                  <input
                    type="color"
                    onChange={this.handleBorderLeftColor.bind(this)}
                    value={borderLeftColor}
                  ></input>
                  <input
                    type="number"
                    onChange={this.handleBorderLeftSize.bind(this)}
                    value={borderLeftSize}
                  ></input>
                  <select
                    value={borderLeftType}
                    onChange={this.handleBorderLeft.bind(this)}
                  >
                    {BorderType.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="setBorderControls">
                  <label forhtml="borderRightInd">{paletteSec} Right</label>
                  <input
                    type="color"
                    id="borderRightInd"
                    onChange={this.handleBorderRightColor.bind(this)}
                    value={borderRightColor}
                  ></input>
                  <input
                    type="number"
                    onChange={this.handleBorderRightSize.bind(this)}
                    value={borderRightSize}
                  ></input>
                  <select
                    value={borderRightType}
                    onChange={this.handleBorderRight.bind(this)}
                  >
                    {BorderType.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="settings-separator"></div>
              <div className="grayAndBlur">
                <div>
                  <label forhtml="grayscale">
                    {scaleSec} Grayscale <span>{grayscale}%</span>
                  </label>
                  <input
                    id="grayscale"
                    type="range"
                    min="0"
                    max="99"
                    value={grayscale}
                    onChange={this.Grayscale.bind(this)}
                  ></input>
                </div>
                <div>
                  <Fragment>
                    <input
                      id="disableBlur"
                      type="checkbox"
                      onChange={this.DisableBlur.bind(this)}
                    ></input>
                    {iciclesSec}
                    <label forhtml="disableBlur">
                      Blur <span>{blur}px</span>
                    </label>
                  </Fragment>

                  <input
                    disabled={disabledBlur}
                    type="range"
                    min="0"
                    max="99"
                    value={blur}
                    onChange={this.Blur.bind(this)}
                  ></input>
                </div>
              </div>

              <label forhtml="rotate">
                {syncSec} Rotate <span>{rotate}deg</span>
              </label>
              <input
                id="rotate"
                type="range"
                min="-180"
                max="180"
                value={rotate}
                onChange={this.Rotate.bind(this)}
              ></input>
              <label forhtml="boxShadowOpacity">
                {cloudSec} Box shadow <span>0.{boxShadowOpacity}%</span>
              </label>
              <input
                id="boxShadowOpacity"
                type="range"
                min="0"
                max="99"
                value={boxShadowOpacity}
                onChange={this.BoxShadow.bind(this)}
              ></input>
              <label forhtml="shadowOptions">
                {paletteSec} Shadow options <span>yyy??</span>
              </label>
              <input
                id="shadowOptions"
                type="color"
                onChange={this.ShadowBackground.bind(this)}
              ></input>
              <div className="shadow-options">
                <label forhtml="shadowBlur">{dotCircle}</label>
                <input
                  id="shadowBlur"
                  type="number"
                  value={shadowBlur}
                  onChange={this.ShadowOptionsBlur.bind(this)}
                ></input>
                <label forhtml="shadowSize">{sortDown}</label>
                <input
                  id="shadowSize"
                  type="number"
                  value={shadowSize}
                  onChange={this.ShadowOptionsSize.bind(this)}
                ></input>
                <label forhtml="shadowRight">{arrowsH}</label>
                <input
                  id="shadowRight"
                  type="number"
                  value={shadowRight}
                  onChange={this.ShadowOptionsRight.bind(this)}
                ></input>
                <label forhtml="shadowDown">{arrowsV}</label>
                <input
                  id="shadowDown"
                  type="number"
                  value={shadowDown}
                  onChange={this.ShadowOptionsDown.bind(this)}
                ></input>
              </div>
              <div className="skew">
                <input
                  id="disableSkew"
                  type="checkbox"
                  onChange={this.DisableSkew.bind(this)}
                ></input>{" "}
                {expandSec}
                <label forhtml="disableSkew">
                  Skew Axis{" "}
                  <span>
                    X: {skewX} / Y: {skewY} deg
                  </span>
                </label>
                <div>
                  <label forhtml="skewX">X</label>
                  <input
                    id="skewX"
                    type="range"
                    min="-45"
                    max="45"
                    disabled={disabledSkew}
                    onChange={this.SkewX.bind(this)}
                    value={skewX}
                  ></input>
                  <label forhtml="skewY">Y</label>
                  <input
                    id="skewY"
                    type="range"
                    disabled={disabledSkew}
                    min="-45"
                    max="45"
                    onChange={this.SkewY.bind(this)}
                    value={skewY}
                  ></input>
                </div>
              </div>
              <div className="perspective">
                <input
                  id="disablePerspective"
                  type="checkbox"
                  onChange={this.DisablePerspective.bind(this)}
                ></input>
                {expandSec}
                <label forhtml="disablePerspective">
                  Perspective{" "}
                  <span>
                    X: {perspectiveX} / Y: {perspectiveY} px
                  </span>
                </label>
                <div>
                  <label forhtml="perspectiveX">X</label>
                  <input
                    id="perspectiveX"
                    type="range"
                    min="-180"
                    max="180"
                    disabled={perspectiveDisabled}
                    onChange={this.PerspectiveX.bind(this)}
                    value={perspectiveX}
                  ></input>
                  <label forhtml="perspectiveY">Y</label>
                  <input
                    id="perspectiveY"
                    type="range"
                    disabled={perspectiveDisabled}
                    min="-180"
                    max="180"
                    onChange={this.PerspectiveY.bind(this)}
                    value={perspectiveY}
                  ></input>
                </div>
                <label forhtml="perspectiveXY">Both X + Y axis</label>
                <input
                  id="perspectiveXY"
                  type="range"
                  min="-180"
                  max="180"
                  disabled={perspectiveDisabled}
                  onChange={this.PerspectiveXY.bind(this)}
                  value={perspectiveXY}
                ></input>
              </div>
            </div>
          </div>

          <div className="output">
            <div
              style={{
                backgroundColor: `rgb(${red},${green}, ${blue} )`,
                width: `${width * 5}px`,
                height: `${height * 5}px`,
                opacity: `0.${opacity}`,
                borderRadius: `${borderRadius}% `,
                boxShadow: `${shadowRight}px ${shadowDown}px ${shadowBlur}px ${shadowSize}px rgba(${shadowRed}, ${shadowGreen}, ${shadowBlue}, 0.${boxShadowOpacity})`,
                borderTop: `${borderTopSize}px ${borderTopType} ${borderTopColor}`,
                borderBottom: `${borderBottomSize}px ${borderBottomType} ${borderBottomColor}`,
                borderLeft: `${borderLeftSize}px ${borderLeftType} ${borderLeftColor}`,
                borderRight: `${borderRightSize}px ${borderRightType} ${borderRightColor}`,
                transform: `perspective(${perspective}px) rotateX(${perspectiveX}deg) rotateY(${perspectiveY}deg) rotate(${rotate}deg) skewX(${skewX}deg) skewY(${skewY}deg)`,
                filter: `blur(${blur}px) grayscale(0.${grayscale})`,
              }}
            ></div>
          </div>
        </div>
        <div className="codeOutput">
          <div>
            <div className="codeOutput_lang">
              <p className="colored_className">
                <span>{htmlAwsome} html</span>
                <br />
                &#x0003C;div class="DIVMaker"&#x0003E;&#x0003C;/div&#x0003E;
              </p>
            </div>
            <div className="codeOutput_lang">
              <p className="colored_className">
                <span>{cssAwsome} css</span>
                <br />
                .DIVMaker &#123;
              </p>
              <p className="colored">
                background: rgba({red}, {green}, {blue}, 0.{opacity}
                );
              </p>
              <p className="colored">width: {width * 5}px;</p>
              <p className="colored">height: {height * 5}px;</p>
              <p className="colored">border-radius: {borderRadius}%;</p>
              <p className="colored">
                border-top: {borderTopSize}px {borderTopType} {borderTopColor};
              </p>
              <p className="colored">
                border-bottom: {borderBottomSize}px {borderBottomType}{" "}
                {borderBottomColor};
              </p>
              <p className="colored">
                border-left:
                {borderLeftSize}px {borderLeftType} {borderLeftColor};
              </p>
              <p className="colored">
                border-right: {borderRightSize}px {borderRightType}{" "}
                {borderRightColor};
              </p>
              <p className="colored">
                filter: grayscale(0.{grayscale}) blur(
                {blur}px);
              </p>
              <p className="colored">
                transform: perspective({perspective}px) rotateX(
                {perspectiveX}deg) rotateY({perspectiveY}deg) rotate(
                {rotate}
                deg) skewX(
                {skewX}deg) skewY({skewY}deg);
              </p>
              <p className="colored_className">&#125;</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RangeSlider;
