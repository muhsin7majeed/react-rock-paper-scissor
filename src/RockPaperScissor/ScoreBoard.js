import React from "react";

const ScoreBoard = ({ score }) => {
  return (
    <div className="score_board">
      <h1>
        hooman's Score <span>{score.hooman}</span>
      </h1>

      <h1>
        robot's Score <span>{score.robot}</span>
      </h1>
    </div>
  );
};

export default ScoreBoard;
