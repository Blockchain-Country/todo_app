import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'
import TodoActions from './components/TodoActions'

function App() {
  const [todoList, setTodoList] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    }
    text.length && setTodoList([...todoList, newTodo])
  }

  const removeTodoHandler = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }

  const removeAllTodosHandler = () => {
    setTodoList([])
  }

  const removeCompletedTodosHandler = () => {
    setTodoList(todoList.filter((todo) => todo.isCompleted !== true))
  }

  const toggleTodoHandler = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    )
  }

  const completedTodosCount = todoList.filter((todo) => todo.isCompleted).length

  return (
    <div className="App">
      <h1 datatest-id="todo_app_header">My todos</h1>
      <TodoForm addTodo={addTodoHandler} />
      {todoList.length > 0 && (
        <TodoActions
          romoveAllTodos={removeAllTodosHandler}
          removeCompletedTodos={removeCompletedTodosHandler}
          completedTodosExist={!!completedTodosCount}
        />
      )}
      <TodoList
        todos={todoList}
        removeTodo={removeTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h2>
          {`You have completed ${completedTodosCount} ${
            completedTodosCount > 1 ? 'todos' : 'todo'
          }`}
        </h2>
      )}
    </div>
  )
}

export default App
