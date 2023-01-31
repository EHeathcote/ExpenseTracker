import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
// a component in react is just a special javascript function, must start with uppercase character

// may only have one root elements per statement, but can have multiple elements side by side within that one element
// react will give us one parameter for each component which will be an object holding all recieved attributes as properties
function ExpenseItem(props) {
  // imperative way of adding event listener: document.getElementById('root').addEventListener(event);
  // react hook useState must be called directly in a react element function, using const here becuause we are updating the title with setTitle, not directly with equal sign
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    // state updating function tells react that you want to assign a new value to the state which also tells react that the entire component instance should be reevaluated
    setTitle("Updated");
    // new value isnt immediately avlailbale becuase updating function schedules the update, it is not immediate
    console.log(title);
  };
  return (
    // custom components do not support className, they only support what you tell them to support
    // component is a function olny special thing is that it returns JSX, so since it is a function, it has to be called to return a value - react only calls the function once when the page is rendered, so if things change, we dont see it updated unless we tell react that a certain component needs to be reevaluated
    // must import useState function (react hook) from react library
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">
        ${props.amount}
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
