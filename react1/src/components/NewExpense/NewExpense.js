import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing,setIsEditing]=useState(false)
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData)
    //console.log(expenseData);
    setIsEditing(false)
   
  };
  const clickHandler=()=>{
    setIsEditing(true)
  }
  const stopEditingHandler=()=>{
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {isEditing===false ?( <button onClick={clickHandler}>Add New Expense</button>)
      :(  <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} stopEditing={stopEditingHandler}/>)}
     
    
    </div>
  );
};
export default NewExpense;
