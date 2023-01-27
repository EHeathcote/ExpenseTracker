import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
// a component in react is just a special javascript function, must start with uppercase character

// may only have one root elements per statement, but can have multiple elements side by side within that one element
// react will give us one parameter for each component which will be an object holding all recieved attributes as properties
function ExpenseItem(props) {
  console.log(props);
  return (
    // custom components do not support className, they only support what you tell them to support
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
