import React, { Component } from 'react';
import {dogs} from './dog_data';
import Dog from './Dog'

export default class DogList extends Component {
  state = {
    breed: "All",
    doglist: dogs
  }

  doglist = () => dogs.map(dog => <Dog key={dog.id} dog={dog} select={this.state.breed}/>)

  dogBreeds = () => {
    const breedArray = dogs.map(dog => dog.breed)
    const uniqueBreeds = [...new Set(breedArray)]
    return uniqueBreeds.map(breed => <option value={breed} key={breed}>{breed}</option>)
  }

  handleSelect = ({target: {value}}) => {
    this.setState({breed: value})
  }

  sortAge = () => {
    const sortedDogs = dogs.sort((a, b) => a.age - b.age)
    this.setState({doglist: sortedDogs})
  }

  render(){
    return(
      <div>
        <h1>Dog List</h1>
        <select name="breed" id="breed" onChange={this.handleSelect}>
          <option value="All">All Breeds</option>
          {this.dogBreeds()}
        </select>
        <button onClick={this.sortAge}>Sort By Age</button>
        {this.doglist()}
      </div>
      
    )
  }
}