import './App.css';
import Todolist from './components/Todolist'

function App() {
  return (
    <>
<section className="todoapp">
	

<Todolist></Todolist>

	
</section>

<footer className="info">
	<p>Click to edit a todo</p>
	<p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
	<p>Modified to React App by <a href="https://github.com/berkinalpp">Berkin Alp</a></p>
	<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
</footer>
</>
  );
}

export default App;
