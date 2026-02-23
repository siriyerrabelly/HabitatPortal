// src/components/layout/Layout.jsx
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./Layout.css";

export default function Layout({ sections, currentSection, onSelectSection, children }) {
  return (
    <div className="layout">
      <Header />
      <div className="main-content">
        <Sidebar sections={sections} currentSection={currentSection} onSelect={onSelectSection} />
        <main className="content-area">{children}</main>
      </div>
    </div>
  );
}