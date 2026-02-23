
// src/components/content/ContentDetail.jsx
import React from "react";

export default function ContentDetail({ item, onClose }) {
  if (!item) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",          // increased padding
          borderRadius: "15px",
          maxWidth: "800px",        // increased width
          width: "90%",             // responsive
          textAlign: "center",
          position: "relative"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            fontSize: "1.5rem",      // bigger close button
            background: "none",
            border: "none",
            cursor: "pointer"
          }}
        >
          ×
        </button>
        <img
          src={item.image}
          alt={item.title}
          style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "10px", marginBottom: "20px" }} // bigger image
        />
        <h2 style={{ fontSize: "2rem", marginBottom: "15px" }}>{item.title}</h2> 
        <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>{item.content}</p> 
      </div>
    </div>
  );
}