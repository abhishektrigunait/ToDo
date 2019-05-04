import React from "react"

function TodoItem(props) {
    return (
        <div>
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            {props.item.completed ? <i text-decoration="line-through">{props.item.text}</i> : <h4>{props.item.text}</h4>}
            <hr />
        </div>
    )
}

export default TodoItem