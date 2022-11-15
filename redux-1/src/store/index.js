import {  createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialCounterState={counter:0,showCounter:true}
const counterSlice=createSlice({
    name:'counter1',
    initialState:initialCounterState,
    reducers:{
        INCREAMENT(state){
            state.counter++;
        },
        DECREAMENT(state){
            state.counter--
        },
       INCREASE(state,action){
            state.counter=state.counter+action.payload;
        },
        TOGGLE(state){
            state.showCounter=!state.showCounter
        }
    }
})
//console.log(counterSlice)
// ********  create another createSlice for AUTH********

const initialAuthState={
    isAuthenticated: false,
}
const authSlice=createSlice({
    name:'authenication',
    initialState:initialAuthState,
    reducers:{
        login(state){
            state.isAuthenticated=true
        },
        logout(state){
            state.isAuthenticated=false
        }
    }
})


const store=configureStore({
    reducer:{
        counter2:counterSlice.reducer,
        auth:authSlice.reducer
    }
})

export const counterActions = counterSlice.actions;
export const authAction=authSlice.actions

export default store;




//***********without redux tool kit************ */

//const initialState={counter:0,showCounter:true}
// const counterReducer=(state=initialState,action)=>{
//     //console.log(action)
//     if(action.type==="INCREAMENT"){
//         return{
//             counter:state.counter+1,
//             showCounter:state.counter
//         } 
//     }
//      else if(action.type==="INCREASE"){
//         return{
//             counter:state.counter+action.amount,
//             showCounter:state.counter
//         }
//     }
//      else if(action.type==='TOGGLE'){
//         return{
//             showCounter:!state.showCounter,
//             counter:state.counter
//         }
//     }
//      else if(action.type==='DECREAMENT'){
//         return{
//             counter:state.counter-1,
//             showCounter:state.counter
//         } 
//     }else{
//         return state
//     }
// }


// const store=createStore(counterReducer)
// export default store