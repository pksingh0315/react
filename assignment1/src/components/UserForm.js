import { useState } from "react";
import DisplayData from "./DisplayData";

import Button from "./UI/Button";
import styles from "./UserForm.module.css";
const UserForm = (props) => {
  // console.log(props);
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [data, setData] = useState([]);
  const [error,setError]=useState()

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  
  const enteredAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 ||enteredAge.trim().length===0) {
      
      setError(alert('Please Entered all Input'))
      return;
    }
    if(enteredAge<1){
      
      setError(alert('Age must be Above 1 Year'))
    }
    const userData = {
      name: enteredName,
      age: enteredAge,
    };
    let newData = [...data, userData];
    // console.log(props.item);

    setData(newData);
    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <>
      {error }
      <form className={styles.form} onSubmit={submitHandler}>
        <label>Username</label>
        <input type="text" value={enteredName} name="enteredName" onChange={enteredNameHandler} />

        <label>Age(Year)</label>
        <input type="number" value={enteredAge} onChange={enteredAgeHandler} />

        <Button type="submit">Add User</Button>
      </form>
      <DisplayData item={data} />
      
    </>
  );
};
export default UserForm;
