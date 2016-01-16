require('chai').should()
import React from 'react'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import TodoItem from './index'
import styles from './styles.css'

let todoItem = null
const [toggleTodo, deleteTodo, editTodo] = [spy(), spy(), spy()]

describe('<TodoItem />', () => {
  before(() => {
    todoItem = shallow(
      <TodoItem
        completed
        toggle={toggleTodo}
        delete={deleteTodo}
        edit={editTodo}
        id={1}
      >test</TodoItem>
    )
  })

  it('click on checkbox should handle toggleTodo', () => {
    todoItem.find(`.${styles.checkbox}`).simulate('click')
    toggleTodo.should.have.been.calledOnce
    todoItem.find(`.${styles.checkbox}`).simulate('click')
    toggleTodo.should.have.been.calledTwice
  })

  it('click on cross should handle deleteTodo', () => {
    todoItem.find(`.${styles.delete}`).simulate('click')
    deleteTodo.should.have.been.calledOnce
  })

  it('changing text and blur input should handle editTodo', () => {
    todoItem.find(`.${styles.text}`).simulate('doubleClick')
    todoItem.find(`.${styles.input}`).simulate('blur')
    editTodo.should.have.been.calledOnce
  })
})
