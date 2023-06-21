import React from "react";
import "./grab-btn.css";
import { Link } from "react-router-dom";

const grab_btn = (props) => {
  const phoneNumber = "+355 69 4884 550"; // Replace with your desired phone number

  const handleClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const to = props.url === undefined ? "/home" : props.url;

  return (
    <div className="grab">
      {to === "/order" ? (
        <a href={`tel:${phoneNumber}`} onClick={handleClick}>
          {props.content}
        </a>
      ) : (
        <Link to={to}>{props.content}</Link>
      )}
    </div>
  );
};

export default grab_btn;
