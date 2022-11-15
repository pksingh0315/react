import React, {useState} from 'react'
import Card from '../UI/Card'
import styles from "./AddUsers.module.css"
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'


const AddUsers=(props)=>{
    //console.log(props)
    const[enteredName,setEnteredName]=useState('')
    const[enteredAge,setEnteredAge]=useState('')
    const [error,setError]=useState()

    const usernameChangeHandler=(event)=>{
        setEnteredName(event.target.value)
    }
    const ageChangeHandler=(event)=>{
        setEnteredAge(event.target.value)
    }


    const addUserHandler=(event)=>{
        event.preventDefault()
        
        if(enteredName.trim().length===0 || enteredAge.trim().length===0){
            setError({
                title:"Invalid Input",
                message:'Please enter a valid name and age(non empty values)'
            })
            return   

            
        }
        if(+enteredAge<1){
            setError({
                title:"Invalid Input",
                message:'Please enter a valid  age(age>0)'
            })
            return;
        }
        let userObj={
            name:enteredName,
            age:enteredAge
        }
        props.onAddUser(userObj)
        //console.log(enteredName,enteredAge)
        setEnteredName('')
        setEnteredAge('')
    }

    const erroHandler=()=>{
        setError(null)
    }


    return(
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={erroHandler}/>}
        <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' onChange={usernameChangeHandler} value={enteredName}/>
            <label htmlFor='age'>Age(Year)</label>
            <input type='number' id='age' onChange={ageChangeHandler} value={enteredAge} />
            <Button type="submit" >Add Users</Button>
        </form>
       
        </Card>
        </div>
    )
}
export default AddUsers