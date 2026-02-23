// src/components/hooks/UseFetchContent.js
// src/components/hooks/UseFetchContent.js
import { useState, useEffect } from "react";
import { mockData } from "../data/mockData.js";

export default function useFetchContent(sectionId) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    const timeout = setTimeout(() => {
      if (mockData[sectionId]) {
        setData(mockData[sectionId]);
        setLoading(false);
      } else {
        setError("Section not found");
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [sectionId]);

  return { data, loading, error };
}