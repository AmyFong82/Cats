import React, {Component} from "react";

export default class Penguin extends Component {
  state = {
    like: 0
  }

  handleClick = () => {
    this.setState(prevState => {
      return {like: prevState.like + 1}
    })
  }

  render(){
    return(
      <p>{this.props.penguin.name} <button onClick={this.handleClick}>Like: {this.state.like}</button></p>
    )
  }
}