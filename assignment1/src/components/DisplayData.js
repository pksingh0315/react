
import "./DisplayData.css"
const DisplayData = (props) => {
  //console.log(props)
  return (
    <ul className="userList">
      {props.item.map((ele,index)=>
        <li key={index}>
        <h3>{ele.name }({ele.age} Year Old )</h3>
        </li>
      )}
    </ul>
  )

 
};
export default DisplayData;
