import React from "react";
import Accordion from "./components/Accordion";
import { accordionData } from "./utils/content";

function App() {
  return (
    <div className="accordion">
      <h1 className="accordion-heading">Frequently Asked Questions</h1>
      {accordionData.map(({ title, content }) => (
        <Accordion title={title} content={content} />
      ))}
    </div>
  );
}

export default App;
