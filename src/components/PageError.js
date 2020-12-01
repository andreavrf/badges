import React from "react";
import unavailable from "../images/error.svg";
import { Link } from "react-router-dom";
import "../components/styles/PageError.css";
function PageError(props) {
  return (
    <div className="content-page">
      <div className="content-img">
        <img src={unavailable} className="img-unavailable" alt="Error 503" />
      </div>
      <Link className="btn btn-primary" to="/">
        Go to home
      </Link>
    </div>
  );
}

export default PageError;
