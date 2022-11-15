
import classes from './UserList.module.css'
import Card from '../UI/Card'

const UserList=(props)=>{
   // console.log(props)

    return(
        <Card className={classes.users}>
        <ul>
            {props.item.map((ele,index)=>
                <li key={index}>{ele.name} ({ele.age} Year old)</li>
            )}
        </ul>
        </Card>
    )

}
export default UserList
