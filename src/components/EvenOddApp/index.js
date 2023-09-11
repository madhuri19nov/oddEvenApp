// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrementClick = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const countText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="app-container">
        <div className="counter-container">
          <h1 className="heading">Count {count}</h1>
          <p className="count-text">Count is {countText}</p>
          <button
            className="increment-btn"
            type="button"
            onClick={this.onIncrementClick}
          >
            Increment
          </button>
          <p className="footnote">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
