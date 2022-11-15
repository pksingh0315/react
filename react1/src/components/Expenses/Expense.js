//import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
function Expense(props) {
  //console.log(props.item)
  const [filterYear, setFilterYear] = useState("2025");

  const filterChangeHandler = (selectYear) => {
    setFilterYear(selectYear);
  };

  const filteredExpense = props.item.filter((ele) => {
    return ele.date.getFullYear().toString() === filterYear;
  });

  // let expenseContent=<p>No Expense Found</p>

  return ( 
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpense}/>
        <ExpensesList item ={filteredExpense}/>

       
        {/* {filteredExpense.length === 0 && <p>No Expense Found</p>}
        {filteredExpense.length > 0 &&
          filteredExpense.map((ele) => (
            <ExpenseItem
              key={ele.id}
              title={ele.title}
              tarikh={ele.date}
              amount={ele.amount}
            />
          ))} */}
  {/* ***************************************************************************** */}
        {/* <ExpenseItem
        title={props.item[0].title}
        tarikh={props.item[0].date}
        amount={props.item[0].amount}
      ></ExpenseItem> */}
        {/* <ExpenseItem
        title={props.item[1].title}
        tarikh={props.item[1].date}
        amount={props.item[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[2].title}
        tarikh={props.item[2].date}
        amount={props.item[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[3].title}
        tarikh={props.item[3].date}
        amount={props.item[3].amount}
      ></ExpenseItem> */}
      </Card>
    </div>
  );
}
export default Expense;
