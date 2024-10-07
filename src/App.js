import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([])
  const [ToDo, setToDo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={ToDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodo([...todo, {id : Date.now(), Text:ToDo, status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          todo.map((obj)=>{
            return (
              <div className="todo">
              <div className="left">
                <input onChange={(e)=>{
                  console.log(e.target.checked)
                  console.log(obj)
                  setTodo(todo.filter(obj2=>{
                    if(obj2.id === obj.id){
                      obj2.status = e.target.checked
                    }    
                    return obj2
                  }))
                  
                }} value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.Text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>
            )
          })
        }

        {todo.map((obj)=>{
          if (obj.status){
            return (<h1>{obj.Text}</h1>)
          }
        })}

      </div>
    </div>
  );
}

export default App;