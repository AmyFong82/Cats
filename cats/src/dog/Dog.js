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
      <>
      { (this.props.select === "All" || this.props.select === this.props.dog.breed) &&
        <p>
          {this.props.dog.name}, {" "}
          {this.props.dog.breed}, {" "}
          Age: {this.props.dog.age} {" "}
          <button onClick={this.handleClick}>Like {this.state.like}</button>
        </p>
      }
      </>
    )
  }
}