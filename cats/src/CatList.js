import React, {Component} from 'react';
import { cats } from './cat_data';
import Cat from './Cat';

export default class CatList extends Component {



	catList = cats.map(cat => <Cat key={cat.id} cat={cat} />)

	render(){
		return(
				<div>
					<h1>Cat List</h1>
					<select name="sex" id="sex">
						<option value="F">Female</option>
						<option value="M">Male</option>
					</select>
					{this.catList}
				</div>
			)
	}
}