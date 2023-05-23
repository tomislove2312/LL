import React from "react";
import "./values.css";
import Bartender from "../../assets/bartender.jpeg";

function Values() {
  return (
    <div>
      <img src={Bartender} class="bartender" />
      <div class="our_values">
        <h2>Our Values</h2>
      </div>
      <div class="values">
        <div class="value">
          <h3>Innovation</h3>
          <p>
            Lifeline of progress, driving us to think creatively, challenge the
            status quo and push beyond the boundaries of what one would deem
            possible
          </p>
        </div>
        <div class="value">
          <h3>Creativity</h3>
          <p>
            Spark that ignites our imagination and fuels our ability to think
            outside the box. Process of generating new ideas and finding
            solutions to problems
          </p>
        </div>
        <div class="value">
          <h3>Collaboration</h3>
          <p>
            Cornerstone of success, enabling us to leverage the strengths of
            others to achieve common goals. By working together we can achieve
            our goals
          </p>
        </div>
      </div>
    </div>
  );
}

export default Values;
