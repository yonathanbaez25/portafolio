import { init } from "ityped";

import "./intro.scss";
import Foto from "../../assets/yona.png";
import Down from "../../assets/down.png";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Frontend Developer", "Backend Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={Foto} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Yonathan Acevedo</h1>
          <h3>
            Expecialist in <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portafolio">
          <img src={Down} alt="" />
        </a>
      </div>
    </div>
  );
}
