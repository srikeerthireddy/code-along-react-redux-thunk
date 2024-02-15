// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import {useDispatch,useSelector } from 'react-redux';
import {getData} from './Redux/Action';

const App=()=> {
    const data=useSelector((state)=>state.data);
    const dispatch=useDispatch();
    console.log(data)
  return (
    <>
    <div>
      {data.map((el,i)=>{
        return(
          <div key={i}>
            <h2>{el.name}</h2>
            <p>{el.email}</p>
          </div>
        )
      })}
      <button onClick={()=>dispatch(getData())}>Fetch Data</button>
    </div>
     
     
    </>
  )
}

export default App
