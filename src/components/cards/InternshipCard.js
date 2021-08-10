import React from "react";
import { InternshipDetails } from "../../details/InternshipDetails";
import "../../styles/Resume.scss";

class Cards extends React.Component {
  render() {
    return (
      <div>
        {InternshipDetails.map((item, index) => {
          return (
            <div className="resume-container">
              <div>
                <h6 className="year">{item.duration}</h6>
              </div>
              <div>
                <h4 className="course">{item.job}</h4>
              </div>
              <div>
                <span className="college">{item.company}</span>
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
