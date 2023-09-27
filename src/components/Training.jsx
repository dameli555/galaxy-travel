import React from "react";
import "./Training-Style.css";
import Pod from "../asserts/pod.jpg";
import Moon from "../asserts/moon.jpg";
import { Link } from "react-router-dom";

const Training = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>Training</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          ratione laborum quia odit quae porro aspernatur iusto, quaerat
          accusamus nobis illum tempora.
        </p>
        <Link to="contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={Moon} alt="Moon" className="img" />
          </div>
          <div className="image-stack bottom">
            <img src={Pod} alt="Pod" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
