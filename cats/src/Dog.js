import React, {Component} from 'react'

export default class Dog extends Component {
  state = {
    like: 0
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {like: prevState.like + 1}
    })
  }

  render(){
    return(
      <p>{this.props.dog.name}, {this.props.dog.breed} <button onClick={this.handleClick}>Like {this.state.like}</button></p>
    )
  }
}