import React, {Component} from 'react';
import { cats } from './data';
import Cat from './Cat';

export default class CatList extends Component {

	catList = cats.map(cat => <Cat key={cat.id} cat={cat} />)

	render(){
		return(
				<div>{this.catList}</div>
			)
	}
}