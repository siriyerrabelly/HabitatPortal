// src/components/layout/Sidebar.jsx
import React from "react";
import "./Sidebar.css";

export default function Sidebar({ sections, currentSection, onSelect }) {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          {sections.map(section => (
            <li key={section}>
              <button
                className={currentSection === section ? "active" : ""}
                onClick={() => onSelect(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}