/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./inOption.css";

import { NavLink } from "react-router-dom";

const inOption = (props) => {
  console.log("called");
  let value = (
    <div className="inOption">
      <p className="inHead">{props.head}</p>
      <div className="inImgBox">
        <img src={props.image} />
      </div>

      <p className="inContent">{props.content}</p>
      <p className="inPrice"> {props.price} Lek</p>
      <p className="customize" onClick={props.customization} />

      <button
        type="button"
        className="inOpButton"
        onClick={() =>
          props.add({
            head: props.head,
            counter: 1,
            url: props.image,
            price: props.price,
            content: props.content,
          })
        }
      >
        Add to Cart
      </button>
      <NavLink
        to="/order"
        onClick={() =>
          props.add({
            head: props.head,
            counter: 1,
            url: props.image,
            price: props.price,
            content: props.content,
          })
        }
      >
        Order Now
      </NavLink>
    </div>
  );
  let result = props.check !== null ? value : null;
  return <div>{result}</div>;
};

export default inOption;
