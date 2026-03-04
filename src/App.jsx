import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
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


<div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", background: "linear-gradient(135deg, #7b2ff2 0%, #f357a8 100%)" }}>
  <div className="card shadow p-4" style={{ width: "400px", borderRadius: "20px" }}>
    {/* Task input form for adding new tasks */}
    <h2 className="mb-4 text-center">New Task</h2>
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

    {/* Task list for displaying added tasks */}
    {todos.length === 0 ? (
      <p className="text-center" style={{ color: "#999", marginTop: "20px" }}>No tasks yet.</p>
    ) : (
      todos.map((todo) => (
        <div key={todo.id} className="card mb-2">
          <div className="card-body d-flex justify-content-between align-items-center">
            <span>{todo.text}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {/* Icon for marking task as completed */}
              <span
                onClick={() => toggleComplete(todo.id)}
                style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faCheck} color={todo.completed ? "green" : "lightgray"} />
              </span>
              {/* Delete button for removing tasks */}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteTodo(todo.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </span>
          </div>
        </div>
      ))
    )}
  </div>
</div>










      
    </>
  )

}
export default App
