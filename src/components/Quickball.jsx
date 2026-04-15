import React, { useState } from "react";
import DeveloperInfo from "./DeveloperInfo";
import "./Quickball.css";

const Quickball = () => {
  const [showDeveloper, setShowDeveloper] = useState(false);

  return (
    <>
      <div className="quickball" onClick={() => setShowDeveloper(true)}>
      🛠️
      </div>
      {showDeveloper && <DeveloperInfo onClose={() => setShowDeveloper(false)} />}
    </>
  );
};

export default Quickball;
