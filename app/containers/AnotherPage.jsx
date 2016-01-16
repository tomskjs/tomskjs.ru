import React from 'react'
import Counter from 'components/Counter'


export default class AnotherPage extends React.Component {
  render() {
    return (
      <div>
        <h1>another page</h1>
        <div>some text</div>
        <Counter start={3} />
      </div>
    )
  }
}
