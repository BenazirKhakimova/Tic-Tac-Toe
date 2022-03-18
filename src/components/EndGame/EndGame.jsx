import React from "react";

function EndGame({ restartGame, player, draw }) {
  return (
    <div className="end-game-screen">
      {!draw && (
        <span className="win-text">
          {player ? "O Выиграл!🥳" : "X Выиграл!🥳"}
        </span>
      )}
      {draw && <span className="win-text">Ничья!</span>}

      <button className="btn" onClick={restartGame}>
        RESTART GAME
      </button>
    </div>
  );
}

export default EndGame;
