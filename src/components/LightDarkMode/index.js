// Write your code here

import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isChange: false}

  onChange = () => {
    const {isChange} = this.state
    this.setState({isChange: !isChange})
  }

  render() {
    const {isChange} = this.state

    return (
      <div className="container">
        {isChange ? (
          <div className="dark-bg-card">
            <h1 className="dark-heading"> Click to Change Mode</h1>
            <button type="button" onClick={this.onChange}>
              Dark Mode
            </button>
          </div>
        ) : (
          <div className="bg-card">
            <h1 className="heading"> Click to Change Mode</h1>
            <button type="button" onClick={this.onChange}>
              Light Mode
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default LightDarkMode
