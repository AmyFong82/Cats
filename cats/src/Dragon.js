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
      <>
        { (this.props.select === "all" || this.props.select === this.props.dragon.gender) &&
          <p>
            Name: {this.props.dragon.name} ({this.props.dragon.gender})
            <button onClick={this.handleClick}>{this.state.like}</button>
          </p>
        }
      </>
    )
  }
}