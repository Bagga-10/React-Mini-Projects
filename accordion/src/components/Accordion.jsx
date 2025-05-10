import React, { useState } from "react";
import '../styles.css'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="accordion-card">
      <div className="accordion-header" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <p className="icon">{isActive ? "-" : "+"}</p>
      </div>

      {isActive && (
        <div className="accordion-content">
          <p className="accordion-text">{content}</p>
        </div>
      )}
    </section>
  );
};

export default Accordion;
