// src/components/ui/ErrorMessage.jsx
import React from "react";

export default function ErrorMessage({ message }) {
  return <div style={{ color: "red", fontWeight: "bold", margin: "20px" }}>{message}</div>;
}