import React, { Component } from 'react';
import {dogs} from './dog_data';
import Dog from './Dog'

export default class DogList extends Component {
  state = {
    breeds: []
  }

  doglist = () => dogs.map(dog => <Dog key={dog.id} dog={dog}/>)

  dogBreeds = () => {
    const breedArray = dogs.map(dog => dog.breed)
    const uniqueBreeds = [...new Set(breedArray)]
    return uniqueBreeds.map(breed => <option value={breed} key={breed}>{breed}</option>)
  }

  showAll = () => {
    this.setState({doglist: dogs})
  }

  sortAge = () => {
    const allDogs = this.state.doglist
    allDogs.sort((a, b) => a.age - b.age)
    this.setState({doglist: allDogs})
  }

  render(){
    return(
      <div>
        <h1>Dog List</h1>
        <select name="breed" id="breed">
          <option value="all">All Breeds</option>
          {this.dogBreeds()}
        </select>
        <button onClick={this.sortAge}>Sort By Age</button>
        {this.doglist()}
      </div>
      
    )
  }
}