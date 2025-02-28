import React from "react";
import { Link } from "react-router-dom";

const InvalidURL = () => {
  return (
    <div className="text-center my-10">
      Page not found
      <div className="mt-3  font-bold text-xl text-secondary">
        <Link to="/">Go to Home</Link>
      </div>
    </div>
  );
};

export default InvalidURL;
