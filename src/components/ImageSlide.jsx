import React from "react";
import img1 from "../assets/jkl.gif";
import img2 from "../assets/bvc.gif";
import img3 from "../assets/cvb.gif";
import img4 from "../assets/jkl.gif";
import img5 from "../assets/bvc.gif";
import border from "../assets/down-border.png"

import "./ImageSlide.css";

function ImageSlide() {
  return (
    <div className="wrapper">
      <section id="section1">
        <div className="item">
          <img src={img1} alt="Image 1" />
        </div>

        <div className="item">
          <img src={img2} alt="Image 2" />
        </div>

        <div className="item">
          <img src={img3} alt="Image 3" />
        </div>

        <div className="item">
          <img src={img4} alt="Image 4" />
        </div>

        <div className="item">
          <img src={img5} alt="Image 5" />
        </div>
                <div className="item">
          <img src={img1} alt="Image 1" />
        </div>

        <div className="item">
          <img src={img2} alt="Image 2" />
        </div>

        <div className="item">
          <img src={img3} alt="Image 3" />
        </div>

        <div className="item">
          <img src={img4} alt="Image 4" />
        </div>

        <div className="item">
          <img src={img5} alt="Image 5" />
        </div>
      </section>
            <div>
                    <img className="border-map" src={border} alt="" />
            </div>
    </div>
  );
}

export default ImageSlide;