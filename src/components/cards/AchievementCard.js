import React from "react";
import { AchievementDetails } from "../../details/AchievementDetails";
import "../../styles/Resume.scss";

class Cards extends React.Component {
  render() {
    return (
      <div>
        {AchievementDetails.map((item, index) => {
          return (
            <div className="resume-container" key={index}>
              <div>
                <h6 className="year">{item.year}</h6>
              </div>
              <div>
                <h4 className="course">{item.course}</h4>
              </div>
              <div>
                <span className="college">{item.college}</span>
              </div>

              <p>
                <span className="desc">{item.desc}</span>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Cards;
