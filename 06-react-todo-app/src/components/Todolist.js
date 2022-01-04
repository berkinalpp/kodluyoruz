import React,{useState} from 'react'
import Header from './Header'
import Todo from './Todo'
import TodoFooter from './TodoFooter'


function Todolist() {
	const [todos,setTodos] = useState([])
	const [activeCategory, setActiveCategory] = useState("All");

	const addTodo = (todo) => {
		if(!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}
		const newTodos = [todo,...todos];
		setTodos(newTodos);
		
	}
	const setCompleteTodo = id => {
		let updatedTodos = todos.map(todo => {
			if(todo.id === id ) {
				todo.isComplete = !todo.isComplete
			}
			return todo
		})
		setTodos(updatedTodos);
	}
	const removeTodo = id => {
		let removeArr =[...todos].filter(todo => todo.id !== id);
		setTodos(removeArr);
	}

	const categorizedTodos =
    activeCategory === "All"
      ? todos
      : activeCategory === "Active"
      ? todos.filter(todo => todo.isComplete === false)
      : todos.filter(todo => todo.isComplete === true)


	  const categoryHandler = (category) => {
		setActiveCategory(category);
	  }

	const toggleAllTodos = () => {
		const allTodoIsTrue = todos.every(todo => todo.isComplete === true);
		const toggleAllTodos = todos.map(todo => 
			{
				if(todo.isComplete === false) {
					todo.isComplete = true
				} else if(allTodoIsTrue) {
					todo.isComplete = false
				}
				return todo;
			})
		setTodos(toggleAllTodos);
	}
	const removeCompletedTodos = () => {
		let completedArr = [...todos].filter(todo => todo.isComplete === false);
		setTodos(completedArr);
	}
	
	
    return (
        <>
	<Header 
	onSubmit={addTodo}
	/>

	<section className="main">

	<input className="toggle-all" id="toggle-all" type="checkbox" onChange={toggleAllTodos} />
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>

		
		<ul className="todo-list">
		<Todo 
		 todos ={categorizedTodos}
		 setCompleteTodo={setCompleteTodo}
		 removeTodo={removeTodo}
		/>
		</ul>
	</section>
		<TodoFooter 
		todos ={todos}
		removeCompletedTodos={removeCompletedTodos}
		categoryHandler = {categoryHandler}
		activeCategory={activeCategory}
		/>

	
        </>
    )
}

export default Todolist
