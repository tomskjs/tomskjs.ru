import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'
import TodoHeader from 'components/TodoHeaderInput'
import TodoMainSection from 'components/TodoMainSection'
import TodoFooter from 'components/TodoFooter'


// We need to pass styles={null} after {...props} because
// it is bug in react-css-modules
// https://github.com/gajus/react-css-modules/issues/8

const TodoApp = props => (
  <div styleName='todoapp'>
    <h1 styleName='title'>todos</h1>
    <div styleName='content'>
      <TodoHeader {...props} {...props.actions} styles={null} />
      <TodoMainSection {...props} {...props.actions} styles={null} />
      <TodoFooter {...props} {...props.actions} styles={null} />
    </div>
  </div>
)

TodoApp.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
}

export default CSSModules(TodoApp, styles)
