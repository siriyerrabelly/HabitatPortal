// src/components/content/ContentList.jsx
import React, { useState } from "react";
import ContentItem from "./ContentItem.jsx"; // match filename exactly
import ContentDetail from "./ContentDetail.jsx"; // match filename exactly

export default function ContentList({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {items.map((item) => (
          <ContentItem key={item.id} item={item} onClick={setSelectedItem} />
        ))}
      </div>

      {/* Detail modal */}
      {selectedItem && (
        <ContentDetail
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </>
  );
}