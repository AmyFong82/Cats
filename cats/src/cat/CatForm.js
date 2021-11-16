import React, {Component} from 'react'
import cuid from 'cuid'

export default class CatFrom extends Component {
	state = {
		name: "",
		age: "",
		sex: "",
		id: cuid()
	}

	handleOnChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleOnSubmit = (event) => {
		event.preventDefault()
		const newCat = this.state
		console.log(newCat)
		this.props.addCat(newCat)
	}

	render(){
		return(
			<div>
				<form onSubmit={event => this.handleOnSubmit(event)}>
					<h3>Add New Cat:</h3>
					Name:
					<input type="text" name="name" value={this.name} onChange={event => this.handleOnChange(event)} />
					Age:
					<input type="text" name="age" value={this.age} onChange={event => this.handleOnChange(event)} />
					Sex:
					<input type="text" name="sex" value={this.sex} onChange={event => this.handleOnChange(event)} />
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}