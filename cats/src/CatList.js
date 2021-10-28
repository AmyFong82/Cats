import React, {Component} from 'react';
import { cats } from './cat_data';
import Cat from './Cat';
import CatForm from './CatForm'
import cuid from 'cuid'

export default class CatList extends Component {
	state = {
		select: "a",
		cats: []
	}

	changeShow = ({target: {value}}) => {
		return this.setState({select: value})
	}

	catList = () => cats.map(cat => <Cat key={cat.id} cat={cat} select={this.state.select}/>)

	sortAge = () => {
		const sortedCats = cats.sort((a, b) => a.age - b.age)
		this.setState({cats: sortedCats})
	}

	handleOnSubmit = (event) => {
		event.preventDefault();
		const newCat = {name: this.state.name, age: this.state.age, sex: this.state.sex}
		this.setState(prevState => {cats: prevState.cats.push(newCat)})
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
					<CatForm onSubmit={event => this.handleOnSubmit(event)}/>
				</div>
			)
	}
}