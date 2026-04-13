import React from "react";
import "./static/SourceSelector.css"; // For styling sources

export default function SourceSelector({ sources, selectedSources, toggleSource }) {
  return (
    <div className="sources-container">
      {sources.map((src) => (
        <button
          key={src.id}
          className={`source-btn ${selectedSources.includes(src.id) ? "selected" : ""}`}
          onClick={() => toggleSource(src.id)}
        >
          {src.name}
        </button>
      ))}
    </div>
  );
}