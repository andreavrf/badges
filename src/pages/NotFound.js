import React from "react";

import { Link } from "react-router-dom";
import "../pages/styles/NotFound.css";

function NotFound() {
  return (
    <div className="content-page">
      <h1 className="not-found">404 Not Found</h1>
      <Link className="btn btn-primary" to="/">
        Go to home
      </Link>
    </div>
  );
}
export default NotFound;
