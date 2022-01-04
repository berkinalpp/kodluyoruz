import React from 'react'

function TodoFooter({todos,removeCompletedTodos,categoryHandler,activeCategory}) {
  
    let remainTodo = todos.filter(todo => todo.isComplete === false);

    return (
     <footer className="footer">
		<span className="todo-count">
            {remainTodo.length} items left
		</span>

		<ul className="filters">
			<li>
			<a class={activeCategory === "All" ? 'selected' : ''} onClick={()=> categoryHandler("All")}>All</a>
			</li>
			<li>
				<a class={activeCategory === "Active" ? 'selected' : ''} onClick={()=> categoryHandler("Active")}>Active</a>
			</li>
			<li>
			<a class={activeCategory === "Completed" ? 'selected' : ''} onClick={() => categoryHandler("Completed")}>Completed</a>
			</li>
		</ul>


		{todos.some( todo => todo.isComplete === true) && (
        <button class="clear-completed" onClick={removeCompletedTodos}>
          Clear completed
        </button>
      )}
	</footer>
    )
}

export default TodoFooter
