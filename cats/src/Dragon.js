import React, {Component} from 'react';
import DragonList from './DragonList';

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
      <li key={this.key}>Name: {this.dragon.name}<button onClick={this.handleClick}>{this.state.like}</button></li>
    )
  }
}