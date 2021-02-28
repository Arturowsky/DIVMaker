import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Footer from "./Footer";

import "./App2.css";

const colors = [
  "#09a1e5",
  "#3ec3ff",
  "#962b7c",
  "#cb2e81",
  "#ff3187",
  "#ff9259",
  "#ffb24a",
  "#ffd23b",
  "#07375b",
  "#ce593d",
  "#2ecc71",
  "#8e44ad",
  "#e74c3c",
  "#f39c12",
  "#1abc9c",
  "#be2edd",
  "#badc58",
  "#7ed6df",
  "#c7ecee",
  "#ff4757",
  "#ff6b81",
];

const AnimatedLogo = () => {
  const boxRef = useRef();
  useEffect(() => {
    gsap.from([boxRef.current], {
      x: "-400px",
      y: "-200px",
      width: "200px",
      height: "200px",
      duration: 0.5,
    });
    gsap.to([boxRef.current], {
      x: "0px",
      y: "0px",
      width: "400px",
      height: "400px",
      duration: 0.8,
    });
  });

  const headingRef = useRef();
  useEffect(() => {
    gsap.from([headingRef.current], {
      x: "500px",
      y: "-200px",
    });
  });

  const heading2Ref = useRef();
  useEffect(() => {
    gsap.fromTo(
      [heading2Ref.current],
      {
        y: "320px",
        opacity: 0,
      },
      {
        y: "20px",
        opacity: 1,
        duration: 0.5,
      }
    );
  });
  const heading3Ref = useRef();
  useEffect(() => {
    gsap.from([heading3Ref.current], {
      y: "400px",
      duration: 0.6,
    });
  });
  const paraRef = useRef();
  // useEffect(() => {
  //   gsap.fromTo(
  //     [paraRef.current],
  //     {
  //       x: "400px",
  //       y: "200px",
  //       opacity: 0.1,
  //     },
  //     {
  //       x: "0px",
  //       y: "0px",
  //       duration: 0.5,
  //       opacity: 1,
  //       rotate: "3deg",
  //       width: "150px",
  //     }
  //   );
  // });

  const testRef = useRef();
  useEffect(() => {
    gsap.from(".svgPath", { fill: "white" });
  });

  return (
    <div className="animatedLogo">
      <div className="animatedCenter">
        <div>
          <svg
            ref={boxRef}
            id="Capa_1"
            enableBackground="new 0 0 512 512"
            height="512"
            viewBox="0 0 512 512"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                ref={testRef}
                className="svgPath"
                d="m128 68.143h188v358.214h-188z"
                fill={colors[0]}
              />
              <path
                ref={testRef}
                className="svgPath"
                d="m256 0-128 68.143 128 68.143h128v-68.143z"
                fill={colors[1]}
              />
              <path
                ref={testRef}
                className="svgPath"
                d="m324 136.286 60 375.714 128-68.143v-307.571z"
                fill={colors[2]}
              />
              <path
                ref={testRef}
                className="svgPath"
                d="m256 136.286v136.286l-50 85.642 50 85.643 128 68.143v-375.714z"
                fill={colors[3]}
              />
              <path
                ref={testRef}
                className="svgPath"
                d="m512 136.286-128-68.143-128 68.143 128 68.142z"
                fill={colors[4]}
              />
              <path
                ref={testRef}
                className="svgPath"
                d="m68 272.572 60 239.428 128-68.143v-171.285z"
                fill={colors[5]}
              />
              <path
                ref={testRef}
                className="svgPath"
                d="m0 272.572v171.285l128 68.143v-239.428z"
                fill={colors[6]}
              />
              <path
                ref={testRef}
                className="svgPath"
                d="m128 204.428-128 68.144 128 68.142 128-68.142z"
                fill={colors[7]}
              />
            </g>
          </svg>
        </div>

        <div className="logotype_desc">
          <h1 ref={headingRef}>DIVMaker</h1>
          <h2 ref={heading2Ref}>div styling tool</h2>
          <h3 ref={heading3Ref}>
            <span></span>
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AnimatedLogo;
