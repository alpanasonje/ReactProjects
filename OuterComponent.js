import React, { Component } from 'react'

class OuterComponent extends Component {
  render() {
    return (
      <div>OuterComponent
        Inner Components are
        <h1>{this.props.children}</h1>
      </div>
    )
  }
}

export default OuterComponent