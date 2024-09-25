import { RiTodoFill } from 'react-icons/ri'
import { FaCheckCircle } from 'react-icons/fa'
import { TiDeleteOutline } from 'react-icons/ti'
import styles from './TodoItem.module.css'

function TodoItem({ todo, removeTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
      datatest-id={`${
        todo.isCompleted ? 'todo_item_completed_' : 'todo_item_'
      }${todo.id}`}
    >
      <RiTodoFill
        className={styles.todoIcon}
        datatest-id={`todo_item_icon_${todo.id}`}
      />
      <div
        className={styles.todoText}
        datatest-id={`todo_item_text_${todo.id}`}
      >
        {todo.text}
      </div>
      <TiDeleteOutline
        className={styles.deleteIcon}
        onClick={() => removeTodo(todo.id)}
        datatest-id={`todo_item_delete_icon_${todo.id}`}
      />
      <FaCheckCircle
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
        datatest-id={`todo_item_check_icon_${todo.id}`}
      />
    </div>
  )
}

export default TodoItem
