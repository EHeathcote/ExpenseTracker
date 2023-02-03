import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm.js";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //   calling the function onAddExpense passed as a value from the parent component in App.js -->allows passing enriched expense data information from child newexpense to parent app.js
    props.onAddExpense(expenseData);
  };

  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const showExpenseFormHandler = () => {
    setShowExpenseForm(true);
  };
  const closeExpenseFormHandler = () => {
    setShowExpenseForm(false);
  };
  let FormContent = (
    <button onClick={showExpenseFormHandler}>Add New Expense Item</button>
  );

  if (showExpenseForm) {
    FormContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCloseExpenseForm={closeExpenseFormHandler}
      />
    );
  }

  return <div className="new-expense">{FormContent}</div>;
};

export default NewExpense;

// when submit is clicked go through submitHandler flow to make new item and display:  <form onSubmit={submitHandler}><button>Add New Expense Item</button></form>

// when cancel clicked, don't go through submitHandler, just display:
/* <form onSubmit={submitHandler}><button>Add New Expense Item</button></form> */

// when add new expense item is clicked, display: <div> <div className="new-expense__controls">
//     <div className="new-expense__control">
//     <label>Title</label>
//     <input
//       type="text"
//       value={enteredTitle}
//       onChange={titleChangeHandler}
//     />
//   </div>
//   <div className="new-expense__control">
//     <label>Amount</label>
//     <input
//       type="number"
//       min="0.01"
//       step="0.01"
//       value={enteredAmount}
//       onChange={amountChangeHandler}
//     />
//   </div>
//   <div className="new-expense__control">
//     <label>Date</label>
//     <input
//       type="date"
//       min="2019-01-01"
//       max="2022-12-31"
//       value={enteredDate}
//       onChange={dateChangeHandler}
//     />
//   </div>
// </div>
// <div className="new-expense__actions">
//   <button>Cancel</button>
//   <button type="submit">Submit</button>
// </div> </div>
