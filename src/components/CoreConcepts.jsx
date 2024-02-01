import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";

const CoreConcepts = () => {
  return (
    <section id="core-concepts">
      <h2>Core Concepts!</h2>
      <ul>
        {CORE_CONCEPTS.map((itemConecpt) => (
          <CoreConcept key={itemConecpt.title} {...itemConecpt} />
        ))}
      </ul>
    </section>
  );
};

export default CoreConcepts;
