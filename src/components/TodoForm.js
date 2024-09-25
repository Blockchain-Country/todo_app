import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from './ui/Button'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <div className={styles.todoFromContainer}>
      <form onSubmit={onSubmitHandler} datatest-id="todo_form">
        <input
          placeholder="Enter task todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          datatest-id="input_field"
        />
        <Button type="submit" title="Add new todo" datatest-id="submit_btn">
          Add New
        </Button>
      </form>
    </div>
  )
}

export default TodoForm
