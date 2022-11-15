import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem"
const ExpensesList=(props)=>{
  
    if(props.item.length===0){
        return <h2 className="expenses-list__fallback">Found No Expenses</h2>
      }
      return (
        <ul className="expenses-list">
            { props.item.map((ele) => (
          <ExpenseItem
            key={ele.id}
            title={ele.title}
            tarikh={ele.date}
            amount={ele.amount}
          />
        ))}
        </ul>
      )

}
export default ExpensesList