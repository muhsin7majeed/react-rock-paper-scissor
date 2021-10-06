import React from "react";

const CurrentChoice = ({ hoomanChoice, robotLoading, robotChoice }) => {
  return (
    <div className="current_choice_wrapper">
      {hoomanChoice ? (
        <h1 className="hooman_choice">
          hooman chose {hoomanChoice?.label}
          <img src={hoomanChoice?.icon} alt={hoomanChoice?.label} />
        </h1>
      ) : (
        <h1 className="info">
          <span>hooman thinking..</span>
        </h1>
      )}

      {robotChoice ? (
        <h1>
          robot chose {robotChoice?.label}
          <img src={robotChoice?.icon} alt={robotChoice?.label} />
        </h1>
      ) : (
        <h1 className="info">
          <span>{robotLoading ? "thinking.." : "waiting for hooman"}</span>
        </h1>
      )}
    </div>
  );
};

export default CurrentChoice;
