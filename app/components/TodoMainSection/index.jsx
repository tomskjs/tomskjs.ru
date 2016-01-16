import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'
import TodoItem from 'components/TodoItem'


const TodoMainSection = props => {
  const todosArray = (() => {
    switch (props.todoFilter) {
      case 'all': return props.todos
      case 'active': return props.activeTodos
      case 'completed': return props.completedTodos
      default: return props.todos
    }
  })()

  const todos = todosArray.map(todo => (
    <TodoItem
      key={todo.id}
      id={todo.id}
      completed={todo.completed}
      toggle={props.toggleTodo}
      delete={props.deleteTodo}
      edit={props.editTodo}
    >
      {todo.text}
    </TodoItem>
  ))

  return (
    <section>
      {todos}
    </section>
  )
}

TodoMainSection.propTypes = {
  todos: PropTypes.array.isRequired,
  activeTodos: PropTypes.array.isRequired,
  completedTodos: PropTypes.array.isRequired,
  editTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  todoFilter: PropTypes.string,
}

export default CSSModules(TodoMainSection, styles)
