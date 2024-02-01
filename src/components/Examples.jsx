import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import { EXAMPLES } from "../data.js";
import { useState } from "react";
import Tabs from "./Tabs.jsx";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState();

  const clickHandler = (selectButton) => {
    // selectButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectButton);
  };

  let tabContent = <p>Please Select A Topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => clickHandler("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => clickHandler("jsx")}
            >
              {" "}
              Jsx
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => clickHandler("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => clickHandler("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
};

export default Examples;
