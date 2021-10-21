import React, { Component } from 'react';

export default class Cat {
	state = {
		like: 0
	}


	render(){
		return(
			<P>{this.props.cat.name} <button>{this.state.like}</button></P>
		)
	}
}