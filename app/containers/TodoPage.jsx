import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TodoApp from 'components/TodoApp'
import * as TodoActions from 'actions/todos'


@connect(
  store => ({ todos: store.todos }),
  dispatch => ({ actions: bindActionCreators(TodoActions, dispatch) }),
)
export default class IndexPage extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
  };


  render() {
    const todoFilter = this.props.location.pathname.split('/').pop()
    const todos = {
      activeTodos: this.props.todos.filter(todo => !todo.completed),
      completedTodos: this.props.todos.filter(todo => todo.completed),
      todoFilter,
    }
    return <TodoApp {...this.props} {...todos} />
  }
}
