import React from "react";
import { InternshipDetails } from "../../details/InternshipDetails";
import "../../styles/Resume.scss";

const InternshipCard = () => {
  return (
    <div>
      {InternshipDetails.map((internship, index) => {
        return (
          <div className="resume-container" key={index}>
            <div>
              <h6 className="year">{internship.duration}</h6>
            </div>
            <div>
              <h4 className="course">{internship.job}</h4>
            </div>
            <div>
              <span className="college">{internship.company}</span>
            </div>

            <p>
              <span className="desc">{internship.desc}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default InternshipCard;
