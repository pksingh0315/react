import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { counterActions } from '../store/index';
const Counter = () => {
  const counter=useSelector(state=>state.counter2.counter)
  const show=useSelector(state=>state.counter2.showCounter)
  const dispatch=useDispatch()
  const toggleCounterHandler = () => {
    dispatch(counterActions.TOGGLE())
  };

  const increamentHandler=()=>{
    dispatch(counterActions.INCREAMENT())
  }
  const decreamentHandler=()=>{
    dispatch(counterActions.DECREAMENT())
  }
  const increaseBy5=()=>{
    dispatch(counterActions.INCREASE(5))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      
      {show &&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increamentHandler}>Increament</button>
        <button onClick={increaseBy5}>Increase BY 5</button>
        <button onClick={decreamentHandler}>Decreamnt</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
