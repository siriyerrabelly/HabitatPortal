// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>404 - Page Not Found</h2>
      <p>The page you requested does not exist.</p>
      <Link to="/" style={{ color: "#4caf50", textDecoration: "none" }}>
        Go back home
      </Link>
    </div>
  );
}