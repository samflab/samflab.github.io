import React from "react";
import { EducationDetails } from "../../details/EducationDetails";
import "../../styles/Resume.scss";

class Cards extends React.Component {
  render() {
    return (
      <div>
        {EducationDetails.map((item, index) => {
          return (
            <div className="resume-container">
              <span>
                <h6 className="year">{item.year}</h6>
              </span>
              <span>
                <h4 className="course">{item.course}</h4>
              </span>
              <span>
                <span className="college">{item.college}</span>
              </span>

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
