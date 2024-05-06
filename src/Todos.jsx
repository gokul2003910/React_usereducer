import { useReducer } from "react";

const initialState = [
    {id:1, name: "reading"},
    {id:2, name: "play"},
];
function reducer(state, action){
    switch (action.type){
        case "ADD_TASK":
           return [...state,{id:state.length + 1, name: action.payload}];
        case "DELETE_TASK": 
        return state.filter((task) => task.id !== action.payload);
        default:
            return state;
    }
}

function init(initialState){
    return initialState;
}

const Todos = () => {
    const [todos,dispatch] = useReducer(reducer, initialState,init);

    const addTask = (e) =>{
        if(e.key === "Enter"){
            dispatch({type: "ADD_TASK", payload: e.target.value})
        }
    };

  return (
    <>
     <h3>Task List {todos.length}</h3>
     <label htmlFor="task">Enter task</label>
     <input type="text" id="task" onKeyDown={(e) => addTask(e)} />

     <ul>
        {todos.map((todo) => (
            <li key={todo.id}>
                 {todo.id}.{todo.name}
                <button  onClick={() => dispatch({type:"DELETE_TASK", payload:todo.id})}>Delete</button>
            </li>
        ))}
     </ul>
    </>
  )
}

export default Todos
