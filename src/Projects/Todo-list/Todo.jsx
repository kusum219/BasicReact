import { useState } from "react";
import "../Todo-list/todo.css"

function Todo(){

    const [input, setInput] = useState("")
    const [todos, setTodos] = useState([]);

    let update = (e) =>{
        e.preventDefault();

        setTodos(prevTodos=>{
           return [
            ...prevTodos,
            {title: input, id: crypto.randomUUID()}
           ]
        })
        setInput("")
    }

    let Delete = (id) =>{
        setTodos(prevTodos=>{
            return prevTodos.filter(todo => todo.id !== id);
        })
    }

    return(
        <div className="Container">
        <div className="Todo-container">
            
        {/*In here header of todo is placed*/}
        <div className="todoHeader">
            <form onSubmit={update}>
                <div className="head">
                    <h1>To-Do List</h1>
                    <div className="for-flex">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text"/>
                    <button>Add</button>
                    </div>
                </div>
            </form>
        </div>

        {/*In here footer of todo is placed*/}
        <div className="todoFooter">
            <ul>
            {todos.length === 0 && "Add Something"}
           {todos.map((todo)=>{
            return(
                <li key={todo.id}>
                <label className="Hell">
                    <input type="checkbox"/>
                   {todo.title}
                </label>
                <button onClick={()=>Delete(todo.id)}>Delete</button>
            </li>)
           })}
        </ul>
        </div>
        </div>
        </div>
    )
}
export default Todo;