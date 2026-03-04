import { useState } from 'react'
import './App.css'


function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')// Stores the task text

// Add a new todo item to the list
  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: input }])
      setInput('')
    }
  }
  // Delete task by id
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
    // Toggle task completion status
  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }



  return (
    <>
    
{/* Task input form for adding new tasks */}
<div className="container mt-5">
  <h2 className="mb-4">Add Task</h2>
  <div className="input-group mb-3">
    <input
      type="text"
      className="form-control"
      placeholder="Enter a new task..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button
      className="btn btn-primary"
      onClick={addTodo}
    >
      Add
    </button>
  </div>
</div>


      
    </>
  )

}
export default App
