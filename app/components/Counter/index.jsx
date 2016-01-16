import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'

@CSSModules(styles)
export default class Counter extends React.Component {

  static propTypes = {
    start: PropTypes.number,
  };

  static defaultProps = {
    start: 0,
  };

  constructor(props) {
    super(props)
    this.state = {
      count: props.start,
    }
  }


  addCount = (amount: number = 1) => () => {
    this.setState({
      count: this.state.count + amount,
    })
  };


  render() {
    return (
      <div styleName='counter'>
        <div styleName='count'>{this.state.count}</div>
        <button styleName='button' onClick={this.addCount(1)}>+</button>
        <button styleName='button' onClick={this.addCount(-1)}>-</button>
      </div>
    )
  }
}
