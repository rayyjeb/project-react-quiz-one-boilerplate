import React from "react";

class Result extends React.Component {
  render() {
    return (
        // Result Div
      <div className="ResultMainDiv">
        <h2>Result</h2>
        <div className="ChildResultDiv">
          <h3>You need more practice!</h3>
          <h1>Your Score is 20%</h1>
          <div className="flexDiv alignItems">
            <div>
                {/* Performance texts */}
              <h4>Total number of questions</h4>
              <h4>Numbers of attempted questions</h4>
              <h4>Numbers of correct answers</h4>
              <h4>Number of wrong answer</h4>
            </div>
            <div>
              <p>15</p>
              <p>9</p>
              <p>3</p>
              <p>6</p>
            </div>
          </div>
        </div>
        {/* user interactive buttons */}
        <div className="flexDiv  endGameBtns">
          <button className="playAgainBtn">Play Again</button>
          <button className="backToHome">Back to home</button>
        </div>
      </div>
    );
  }
}

export default Result;
