import React, {Component} from 'react'

export default class CatFrom extends Component {
	state = {
		name: "",
		age: "",
		sex: ""
	}

	handleOnChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	render(){
		return(
			<div>
				<form onSubmit={this.props.handleOnSubmit}>
					<h3>Add New Cat:</h3>
					Name:
					<input type="text" name="name" value={this.name} onChange={event => this.handleOnChange(event)} />
					Age:
					<input type="text" name="age" value={this.age} onChange={event => this.handleOnChange(event)} />
					Sex:
					<input type="text" name="sex" value={this.sex} onChange={event => this.handleOnChange(event)} />
					<button>Submit</button>
				</form>
			</div>
		)
	}
}