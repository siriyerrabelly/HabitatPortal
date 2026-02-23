// src/components/content/ContentItem.jsx
// src/components/content/ContentItem.jsx
import React from "react";

export default function ContentItem({ item, onClick }) {
  return (
    <div
      style={{
        cursor: "pointer",
        margin: "15px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        width: "250px",          // increased from 200px
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
      }}
      onClick={() => onClick(item)}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "100%", height: "200px", objectFit: "cover" }} // increased height
      />
      <h3 style={{ fontSize: "1.2rem" }}>{item.title}</h3> 
    </div>
  );
}