import React, { useEffect, useState } from "react";
import "./style.scss";

import { availableChoices, findRandomFromArray } from "../helpers/utils";

import Choices from "./Choices";
import CurrentChoice from "./CurrentChoice";
import ScoreBoard from "./ScoreBoard";

const RockPaperScissor = () => {
  const [score, setScore] = useState({ hooman: 0, robot: 0 });
  const [gameStatus, setGameStatus] = useState();

  const [hoomanTurn, setHoomanTurn] = useState(true);
  const [hoomanChoice, setHoomanChoice] = useState();

  const [robotChoice, setRobotChoice] = useState();
  const [robotLoading, setRobotLoading] = useState(false);

  useEffect(() => {
    if (hoomanChoice && robotChoice) handleLogic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hoomanTurn]);

  function handleHoomanChoice(choice) {
    if (robotLoading) return;

    setGameStatus();
    setHoomanChoice(choice);
    setHoomanTurn(false);
    handleRobotChoice();
  }

  function handleRobotChoice() {
    setRobotLoading(true);

    setTimeout(() => {
      setRobotChoice(() => findRandomFromArray(availableChoices));
      setHoomanTurn(true);

      setRobotLoading(false);
    }, 1000);
  }

  function handleScore(who) {
    setScore({ ...score, [who]: score[who] + 1 });
  }

  function handleResetChoices() {
    setTimeout(() => {
      setHoomanChoice();
      setRobotChoice();
    }, 2000);
  }

  function handleHoomanVicory() {
    setGameStatus("hooman Won!");
    handleScore("hooman");

    handleResetChoices();
  }

  function handleRobotVicory() {
    setGameStatus("robot Won!");
    handleScore("robot");

    handleResetChoices();
  }

  function handleLogic() {
    const { id: _hId } = hoomanChoice;
    const { id: _rId } = robotChoice;

    if (_hId === _rId) {
      setGameStatus("it's a tie");

      return handleResetChoices();
    }

    // hooman rock
    if (_hId === 1) {
      // robot scissor
      if (_rId === 3) return handleHoomanVicory();
      // robot paper
      else return handleRobotVicory();
    }

    // hooman paper
    if (_hId === 2) {
      // robot rock
      if (_rId === 1) return handleHoomanVicory();
      // robot scissor
      else return handleRobotVicory();
    }

    // hooman scissor
    if (_hId === 3) {
      // robot paper
      if (_rId === 2) return handleHoomanVicory();
      // robot rock
      else return handleRobotVicory();
    }
  }

  return (
    <div className="game_wrapper">
      <div className="platform">
        <ScoreBoard score={score} />

        <CurrentChoice robotChoice={robotChoice} hoomanChoice={hoomanChoice} robotLoading={robotLoading} />

        <h2 className="game_status">{gameStatus || "waiting.."}</h2>

        <Choices handleHoomanChoice={handleHoomanChoice} />

        <h2 className="game_status">{hoomanTurn ? "hooman's turn" : "robot's turn"}</h2>
      </div>
    </div>
  );
};

export default RockPaperScissor;
