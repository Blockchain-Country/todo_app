import { FcDeleteDatabase } from 'react-icons/fc'
import { RiDeleteBackFill } from 'react-icons/ri'
import style from './TodoActions.module.css'

import Button from './ui/Button'

function TodoActions({
  romoveAllTodos,
  removeCompletedTodos,
  completedTodosExist,
}) {
  return (
    <div className={style.todosActionContainer}>
      <Button
        onClick={romoveAllTodos}
        title="Delete All"
        datatest-id="delete_all_todos_btn"
      >
        <FcDeleteDatabase />
      </Button>
      <Button
        onClick={removeCompletedTodos}
        title="Delete Completed"
        disabled={!completedTodosExist}
        datatest-id="delete_all_completed_todos_btn"
      >
        <RiDeleteBackFill />
      </Button>
    </div>
  )
}

export default TodoActions
