import React, { Component } from 'react';
import {dogs} from './dog_data';
import Dog from './Dog'

export default class DogList extends Component {
  state = {
    doglist: dogs
  }

  doglist = () => this.state.doglist.map(dog => <Dog key={dog.id} dog={dog}/>)

  showGermanShepherd = () => {
    this.setState({doglist: dogs.filter(dog => dog.breed === "German Shepherd")})
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
        <button onClick={this.showGermanShepherd}>German Shepherd</button>
        <button onClick={this.showAll}>Show All</button>
        <button onClick={this.sortAge}>Sort By Age</button>
        {this.doglist()}
      </div>
      
    )
  }
}