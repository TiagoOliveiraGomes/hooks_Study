import React,{useReducer, useState} from "react";
import PageTittle from "../../components/layouts/pageTittle";
import {initialState, reducer} from "../../store"
import { number_sum_N } from "../../store/actions";
import "./index.css";

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [number, setNumber] = useState(0)

  return (
    <div className="UseReducer">
      <PageTittle tittle="UseReducer" content="An other form of the states in functional components" />
      <div className="center">
          {state.user? <span className="text">{state.user.name}</span>
          :
          <span className="text">Usuário não logado</span>
          }
        <span className="text">{state.number}</span>
        <input type="number" className="input" onChange={(e)=>setNumber(e.target.value)} value={number}/>
        <div>
            <button className="btn" onClick={()=> dispatch({type: "login", payload: "Tiago"})}>Login</button>
            <button className="btn" onClick={()=>number_sum_N(dispatch, number)}>+{number}</button>
            <button className="btn" onClick={()=> dispatch({type: "number_Multiple_7", payload:7})}>*7</button>
            <button className="btn" onClick={()=> dispatch({type: "number_Divide_25", payload:25})}>/25</button>
            <button className="btn" onClick={()=> dispatch({type: "number_To_int"})}>inteiro</button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
