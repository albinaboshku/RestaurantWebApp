import React from "react";
import "./brand.css";
import logo from "../../../Assests/icons/bambo.png";

const brand = (props) => {
  let vclass = " ";
  if (props.show) {
    vclass = "show";
  }

  let all_class = ["brand"];
  all_class.push(vclass);
  return (
    <div className={all_class.join(" ")}>
      <div className="image-container">
        <img src={logo} alt="Company Logo" className="logo-image" />
      </div>
    </div>
  );
};

export default brand;
