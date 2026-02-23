import { useParams } from "react-router-dom";
import data from "../components/data/mockData";
import ContentList from "../components/content/ContentList";

function Section() {
  const { sectionId } = useParams();
  const section = data.find((sec) => sec.id === sectionId);

  if (!section) return <p>Section not found</p>;

  return (
    <>
      <h2>{section.title}</h2>
      <ContentList items={section.items} sectionId={sectionId} />
    </>
  );
}

export default Section;