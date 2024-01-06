import React from "react";
import { Link } from "react-router-dom";

import illustration from "../assets/images/introduction.svg"; // Ensure this path is correct
import "../styles/Introduction.css";

function Introduction() {
  return (
    <div className="intro-section">
      <div className="intro-text">
        <h1 className="intro-heading">
          Explore, Share, and Inspire Your Passions
        </h1>
        <p className="intro-subtitle">
          Whether you are traveling, cooking, or enjoying time with your
          friends, this is a community to share your experiences through vivid
          photos or videos, explore what you are interested in, and exchange
          your thoughts.
        </p>
        <Link to="/register">
          <button className="intro-discover-button">Discover</button>
        </Link>
      </div>

      <img
        src={illustration}
        alt="Illustrative graphic"
        className="intro-illustration"
      />
    </div>
  );
}

export default Introduction;
