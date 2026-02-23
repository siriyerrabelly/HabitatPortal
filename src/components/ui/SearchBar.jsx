// src/components/ui/SearchBar.jsx
import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="search"
      placeholder="Search..."
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{ padding: "8px", width: "100%", maxWidth: "400px", marginBottom: "20px", fontSize: "1rem" }}
      aria-label="Search content"
    />
  );
}