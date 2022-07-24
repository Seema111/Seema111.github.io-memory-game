const BoardContainer = () => {
  return (
    <div className="game">
      <div className="controls">
        <button>Start</button>
        <div className="stats">
          <div className="moves">0 moves</div>
          <div className="timer">time: 0 sec</div>
        </div>
      </div>
      <div className="board-container">
        <div className="board" data-dimension="4"></div>
        <div className="win">You won!</div>
      </div>
    </div>
  );
};

export default BoardContainer;
