import React, {Component} from 'react'

export default class CatFrom extends Component {
	render(){
		return(
			<div>
				<form onSubmit={this.props.handleOnSubmit}>
					<h3>Add New Cat:</h3>
					Name:
					<input type="text" name="name" value={this.props.name} onChange={this.props.handleOnChange} />
					Age:
					<input type="text" name="age" value={this.props.age} onChange={this.props.handleOnChange} />
					Sex:
					<input type="text" name="sex" value={this.props.sex} onChange={this.props.handleOnChange} />
					<button>Submit</button>
				</form>
			</div>
		)
	}
}