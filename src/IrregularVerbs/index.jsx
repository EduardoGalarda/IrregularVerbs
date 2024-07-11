import { useState } from "react";
import db_Verbs from "../../irregularverbs.json";
import Verb from "../components/Verb";

const IrregularVerbs = () => {

  const [selectedVerbId, setSelectedVerbId] = useState(null);

  const toggleDetails = (id) => {setSelectedVerbId(selectedVerbId === id ? null : id)};

  return (
    <div>
      {db_Verbs.map((verb) => (
        <Verb
          key={verb.id}
          verb={verb}
          showDetails={selectedVerbId === verb.id}
          onToggle={() => toggleDetails(verb.id)}
        />
      ))}
    </div>
  );
};

export default IrregularVerbs;
