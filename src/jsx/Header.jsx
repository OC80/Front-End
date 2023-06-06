import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <div className="header">
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <h1 className="header-h1">News</h1>
      </Link>
      {location.pathname !== "/saved" && (
        <Link to="/saved">
          <button className="header-saved">saved news</button>
        </Link>
      )}
    </div>
  );
}

export default Header;
