import React,{useReducer} from 'react'

const initialState = [
    {id:1, name:"apple"},
    {id:2, name:"orange"},
];
function reducer(state,action){
    switch(action.type){
        case "ADD_ITEM":
            return [...state, {id: Date.now(), name: action.payload}];
        case "REMOVE_ITEM":
            return state.filter((item) => item.id !== action.payload);
        case "UPDATE_ITEM":
            return state.map((map) => (item.id === action.payload.id ? {...item,name: action.payload.newName} : item));
        default:
            return state; 
    }
}

const Reducerapp = () => {
    const [items, dispach] = useReducer(reducer, initialState)
  return (
    <div>
      <h2>Product List</h2>
      <button onClick={() => dispach({type: "ADD_ITEM", payload: prompt("Enter item name:")})}>Add Item</button>
      <ul>
        {items.map((item =>(
            <li key={item.id}>
                {item.name}
                <button onClick={() => dispach({type: "UPDATE_ITEM", payload: {id:item.id, newName:prompt("Enter item name:", item.name)}})}>Update</button>
                <button onClick={() => dispach({type: "REMOVE_ITEM", payload: item.id})}>Delete</button>
            </li>
        )))}
      </ul>
    </div>
  )
}

export default Reducerapp
