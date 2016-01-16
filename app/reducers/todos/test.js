require('chai').should()
import * as actionCreators from 'actions/todos'
import todos from './index'
import deepFreeze from 'deep-freeze-node'


describe('todos', () => {
  it('should add todo', () => {
    const stateBefore = []
    const stateAfter = [{ id: 0, text: 'test', completed: false }]
    deepFreeze(stateBefore)
    const action = actionCreators.addTodo('test')

    todos(stateBefore, action).should.be.deep.equal(stateAfter)
  })

  it('should toggle todo', () => {
    const stateBefore = [{ id: 0, text: 'test', completed: false }]
    const stateAfter = [{ id: 0, text: 'test', completed: true }]
    deepFreeze(stateBefore)
    const action = actionCreators.toggleTodo(0)

    todos(stateBefore, action).should.be.deep.equal(stateAfter)
  })

  it('should edit todo', () => {
    const stateBefore = [{ id: 0, text: 'test', completed: false }]
    const stateAfter = [{ id: 0, text: 'edited', completed: false }]
    deepFreeze(stateBefore)
    const action = actionCreators.editTodo(0, 'edited')

    todos(stateBefore, action).should.be.deep.equal(stateAfter)
  })

  it('should delete todo', () => {
    const stateBefore = [{ id: 0, text: 'test', completed: false }]
    const stateAfter = []
    deepFreeze(stateBefore)
    const action = actionCreators.deleteTodo(0)

    todos(stateBefore, action).should.be.deep.equal(stateAfter)
  })

  it('should clear completed', () => {
    const stateBefore = [
      { id: 0, text: 'test', completed: false },
      { id: 1, text: 'test', completed: true },
      { id: 2, text: 'test', completed: true },
    ]
    const stateAfter = [{ id: 0, text: 'test', completed: false }]
    deepFreeze(stateBefore)
    const action = actionCreators.clearCompleted(0)

    todos(stateBefore, action).should.be.deep.equal(stateAfter)
  })
})
