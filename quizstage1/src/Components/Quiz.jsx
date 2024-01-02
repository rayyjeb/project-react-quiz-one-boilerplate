import React from "react";

class Quiz extends React.Component {
  render() {
    return (
      <div>
        {/* Main Quiz Div */}
        <div className="MainQuizDiv">
          <h2>Question</h2>
          <h5>1 of 15</h5>
          <h3>Which is the only mammal that can jump?</h3>
          {/* Options */}
          <div className="Grids">
            <button>Dog</button>
            <button>Elephant</button>
            <button>Goat</button>
            <button>Lion</button>
          </div>
          {/* User Click Button */}
          <div className="flexDiv alignFlexDiv">
            <button className="blueBtn">Previous</button>
            <button className="greenBtn">Next</button>
            <button className="redBtn">Quit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
