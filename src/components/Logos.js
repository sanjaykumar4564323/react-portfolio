import React from "react";
import "./Logos.css";

const Logos = () => {
  return (
    <div>
      <div className="row">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col">
          <img className="appear small" src="https://i.imgur.com/75fHSmf.png" alt="img" />
        </div>
        <div className="col">
          <img className="appear small" src="https://i.imgur.com/gWvx2dR.png" alt="img"/>
        </div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col middle medium">
          <img
            className="appear-med right-middle"
            src="https://i.imgur.com/GmJNjSu.png" alt="img"
          />
        </div>
        <div className="col middle small">
          <img className="appear" src="https://i.imgur.com/hUFl7ji.png" alt="img"/>
        </div>
      </div>
      <div className="row">
        <div className="col middle small">
          <img
            className="appear right-middle"
            src="https://i.imgur.com/XlrSKdB.png" alt="img"
          />
        </div>
        <div className="col-6">
          <h1 className="size middle down-a-bit">
            Find Your <span className="dream size">DREAM</span> Home!
          </h1>
        </div>
        <div className="col biggest">
          <img className="appear-main" src="https://i.imgur.com/kJKQeTR.png" alt="img"/>
        </div>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <img
            className="appear-med medium"
            src="https://i.imgur.com/raZUb6D.png" alt="img"
          />
        </div>
        <div className="col">
          <img
            className="appear-main biggest"
            src="https://i.imgur.com/u8rRmKU.png" alt="img"
          />
        </div>
        <div className="col">
          <img
            className="appear-main medium"
            src="https://i.imgur.com/zWzwY2J.png" alt="img"
          />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Logos;
