import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'
import cx from 'classnames'

const ENTER_KEY = 13


class TodoItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      editText: null,
    }
  }


  startEditing = () => {
    this.setState({ editText: this.props.children })
  };


  handleTextChange = event => {
    this.setState({ editText: event.target.value })
  };


  handleKeyDownAndSave = e => {
    if (e.keyCode === ENTER_KEY) this.saveTodo()
  };


  saveTodo = () => {
    this.props.edit(this.props.id, this.state.editText)
    this.setState({ editText: null })
  };


  toggle = () => this.props.toggle(this.props.id);
  delete = () => this.props.delete(this.props.id);


  render() {
    const props = this.props

    const text = (() => {
      if (this.state.editText) {
        return (
          <input
            autoFocus
            styleName='input'
            onChange={this.handleTextChange}
            onBlur={this.saveTodo}
            onKeyDown={this.handleKeyDownAndSave}
            value={this.state.editText}
          />
        )
      }
      return (
        <span
          onDoubleClick={this.startEditing}
          styleName='text'
        >{props.children}</span>
      )
    })()

    return (
      <div styleName={cx('item', { completed: props.completed, editing: this.state.editText })}>
        <svg onClick={this.toggle} styleName='checkbox' width='40' height='40' viewBox='-20 -20 140 140'>
          <circle cx='50' cy='50' r='50' fill='none' stroke='#bddad5' strokeWidth='3'/>
          { props.completed && <path fill='#5dc2af' d='M72 25L42 71 27 56l-4 4 20 20 34-52z' /> }
        </svg>
        {text}
        <div onClick={this.delete} styleName='delete' />
      </div>
    )
  }
}


TodoItem.propTypes = {
  children: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
}


export default CSSModules(TodoItem, styles, { allowMultiple: true })
