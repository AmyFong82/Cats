import React, { Component } from 'react';

export default class Cat extends Component {
	state = {
		like: 0
	}


	render(){
		return(
			<p>{this.props.cat.name} <button>{this.state.like}</button></p>
		)
	}
}