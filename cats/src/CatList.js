import React, {Component} from 'react';
import { cats } from './cat_data';
import Cat from './Cat';

export default class CatList extends Component {
	state = {
		show: ""
	}

	changeShow = ({target: {value}}) => {
		return this.setState({show: value})
	}

	catList = cats.map(cat => <Cat key={cat.id} cat={cat} show={this.state.show}/>)

	render(){
		return(
				<div>
					<h1>Cat List</h1>
					<select name="sex" id="sex" defaultValue="A" onChange={this.changeShow}>
						<option value="A">All</option>
						<option value="F">Female</option>
						<option value="M">Male</option>
					</select>
					{this.catList}
				</div>
			)
	}
}