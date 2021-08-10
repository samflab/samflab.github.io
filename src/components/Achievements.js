import React, { Component } from "react";
import Card from "./cards/AchievementCard";

class Achievements extends Component {
  render() {
    return (
      <div id="achievement">
        {" "}
        <h3
          style={{
            fontWeight: "700",
            marginBottom: "30px",
            fontSize: "24px",
            fontFamily: "Poppins"
          }}
        >
          Achievements
        </h3>
        <Card />
      </div>
    );
  }
}

export default Achievements;
