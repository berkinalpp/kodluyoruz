import React from 'react'

function Todo({todos,setCompleteTodo,removeTodo}) {
    
    return (
        <>

		{
		todos.map((todo) => (
			<li key={todo.id} className={todo.isComplete ? 'completed' : ''}   >
				<div className="view">
					<input className="toggle" type="checkbox" checked={todo.isComplete} onChange={()=> setCompleteTodo(todo.id)}/>
					<label>{todo.text}</label>
					<button className="destroy" onClick={()=> removeTodo(todo.id)}></button>
				</div>
			</li>
		))
		}
        </>
    )
}

export default Todo
