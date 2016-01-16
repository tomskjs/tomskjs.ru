import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'
import { Link } from 'react-router'


const TodoFooter = props => {
  if (!props.todos.length) return null

  return (
    <footer styleName='footer'>
      <span>{props.activeTodos.length} items left</span>
      <div>
        <Link activeClassName={styles.filterActive} styleName='filter' to='/todo/all'>All</Link>
        <Link activeClassName={styles.filterActive} styleName='filter' to='/todo/active'>Active</Link>
        <Link activeClassName={styles.filterActive} styleName='filter' to='/todo/completed'>Completed</Link>
      </div>
      <button
        style={{ visibility: !props.completedTodos.length && 'hidden' }}
        onClick={props.clearCompleted}
        styleName='clear'
      >Clear completed</button>
    </footer>
  )
}

TodoFooter.propTypes = {
  todos: PropTypes.array.isRequired,
  activeTodos: PropTypes.array.isRequired,
  completedTodos: PropTypes.array.isRequired,
  clearCompleted: PropTypes.func.isRequired,
}

export default CSSModules(TodoFooter, styles)
