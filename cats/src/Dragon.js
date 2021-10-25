import React, {Component} from 'react';

export default class Dragon extends Component {
  state={
    like: 0
  }

  handleClick = () => {
    this.setState(prevState => {
      return {like: prevState.like + 1}
    })
  }

  render(){
    return(
      <li key={this.props.key}>Name: {this.props.dragon.name}<button onClick={this.handleClick}>{this.state.like}</button></li>
    )
  }
}