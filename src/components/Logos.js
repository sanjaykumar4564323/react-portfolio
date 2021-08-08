import React from "react";
import "./Logos.css";

const Logos = () => {
  return (
    <div>
      <div className="row">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col">
          <img className="appear small" src="https://i.imgur.com/75fHSmf.png" />
        </div>
        <div className="col">
          <img className="appear small" src="https://i.imgur.com/gWvx2dR.png" />
        </div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col middle medium">
          <img
            className="appear-med right-middle"
            src="https://i.imgur.com/GmJNjSu.png"
          />
        </div>
        <div className="col middle small">
          <img className="appear" src="https://i.imgur.com/hUFl7ji.png" />
        </div>
      </div>
      <div className="row">
        <div className="col middle small">
          <img
            className="appear right-middle"
            src="https://i.imgur.com/XlrSKdB.png"
          />
        </div>
        <div className="col-6">
          <h1 className="size middle down-a-bit">
            Find Your <span className="dream size">DREAM</span> Home!
          </h1>
        </div>
        <div className="col biggest">
          <img className="appear-main" src="https://i.imgur.com/kJKQeTR.png" />
        </div>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <img
            className="appear-med medium"
            src="https://i.imgur.com/raZUb6D.png"
          />
        </div>
        <div className="col">
          <img
            className="appear-main biggest"
            src="https://i.imgur.com/u8rRmKU.png"
          />
        </div>
        <div className="col">
          <img
            className="appear-main medium"
            src="https://i.imgur.com/zWzwY2J.png"
          />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Logos;
