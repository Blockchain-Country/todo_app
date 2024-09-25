import TodoItem from './TodoItem'
import styles from './TodoList.module.css'

function TodoList({ todos, removeTodo, toggleTodo }) {
  return (
    <div className={styles.todoListContainer} datatest-id="todo_list">
      {todos.length === 0 && (
        <h2 datatest-id="empty_list_header">The list is empty</h2>
      )}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  )
}

export default TodoList
