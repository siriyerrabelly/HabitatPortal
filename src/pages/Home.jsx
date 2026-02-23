// src/pages/Home.jsx
import React, { useState } from "react";
import useFetchContent from "../components/hooks/useFetchContent.js"; // Corrected path
import Layout from "../components/layout/Layout";
import ContentList from "../components/content/ContentList";
import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/ui/ErrorMessage";
import SearchBar from "../components/ui/SearchBar";
import { mockData } from "../components/data/mockData";

export default function Home() {
  const [section, setSection] = useState("rainforest");
  const [searchTerm, setSearchTerm] = useState("");

  const { data, loading, error } = useFetchContent(section);

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout sections={Object.keys(mockData)} currentSection={section} onSelectSection={setSection}>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && <ContentList items={filteredData} />}
    </Layout>
  );
}