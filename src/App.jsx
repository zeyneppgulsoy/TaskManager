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


  return (
    <>
      
    </>
  )

}
export default App
