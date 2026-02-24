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
      
    </>
  )

}
export default App
