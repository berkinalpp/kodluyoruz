import React,{useState} from 'react'

function Header({addTodo}) {
    const [input,setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value);
    }

   const handleSubmit = (e) => {
      
       e.preventDefault();

       addTodo({
        id:Math.floor(Math.random()*10000),
        text:input,
        isComplete:false
     });
     
        setInput('')
   }

    return (
        <>
    <header className="header">
	<h1>todos</h1>
		<form onSubmit={handleSubmit}>
		<input className="new-todo" value={input} onChange={handleChange} placeholder="What needs to be done?" autoFocus />
		</form>
	</header>

        </>
    )
}

export default Header
