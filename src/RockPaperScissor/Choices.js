import React from "react";
import { availableChoices } from "../helpers/utils";

const Choices = ({ handleHoomanChoice }) => {
  return (
    <div className="choices">
      {availableChoices.map((c) => (
        <button key={c.id} onClick={() => handleHoomanChoice(c)}>
          <img src={c.icon} alt={c.label} />

          <span>{c.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Choices;
