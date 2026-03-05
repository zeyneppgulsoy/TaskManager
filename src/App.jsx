

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


    <div className="app-container">
      <div className="card app-card">
        {/* Task input form for adding new tasks */}
        <h2 className="new-task-heading">New Task</h2>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="add-btn"
            onClick={addTodo}
          >
            Add
          </button>
        </div>

    {/* Task list for displaying added tasks */}
    {todos.length === 0 ? (
      <p className="empty-state">No tasks yet.</p>
    ) : (
      todos.map((todo) => (
        <div key={todo.id} className="card mb-2">
          <div className="card-body d-flex justify-content-between align-items-center">
            <span>{todo.text}</span>
            <span className="task-actions">
              {/* Icon for marking task as completed */}
              <span
                className="check-icon"
                onClick={() => toggleComplete(todo.id)}>
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