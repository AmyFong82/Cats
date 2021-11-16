import React, {Component} from 'react';
import { cats } from './cat_data';
import Cat from './Cat';
import CatForm from './CatForm'

export default class CatList extends Component {
	state = {
		select: "a",
		cats: cats
	}

	changeShow = ({target: {value}}) => {
		return this.setState({select: value})
	}

	catList = () => cats.map(cat => <Cat key={cat.id} cat={cat} select={this.state.select}/>)

	sortAge = () => {
		const sortedCats = cats.sort((a, b) => a.age - b.age)
		this.setState({cats: sortedCats})
	}

	addCat = (newCat) => {
		console.log(newCat)
		this.setState(prevState => {
			return {
				cats: prevState.cats.concat(newCat) 
			}
		})
	}

	render(){
		return(
				<div>
					<h1>Cat List</h1>
					<select name="sex" id="sex" onChange={this.changeShow}>
						<option value="a">All</option>
						<option value="f">Female</option>
						<option value="m">Male</option>
					</select>
					<button onClick={this.sortAge}>Sort By Age</button>
					{this.catList()}
					<CatForm addCat={this.addCat}/>
				</div>
			)
	}
}