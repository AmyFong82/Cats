import React, { Component } from 'react';

export default class Cat extends Component {
	state = {
		like: 0,
	}

	handleClick = () => {
		this.setState((prevState) => {
			return {like: prevState.like + 1}
		})
	}

	render(){
		return(
			<p className={this.props.cat.sex}>{this.props.cat.name}, Sex: {this.props.cat.sex}, Age: {this.props.cat.age} <button onClick={this.handleClick}>{this.state.like}</button></p>
		)
	}
}