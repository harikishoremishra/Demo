import React, { Component } from 'react'

export default class Name extends Component {
  constructor() {
    super();
    this.state = {
      nameVisible: true,
    };
 }

 toggleName = () => {
    this.setState({ nameVisible: !this.state.nameVisible });
 }

 render() {
    return (
      <div>
        {this.state.nameVisible ? <h1>Hari</h1> : null}
        <button onClick={this.toggleName}>
          {this.state.nameVisible ? 'Hide Name' : 'Show Name'}
        </button>
      </div>

    )
  }
}