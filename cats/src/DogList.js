import React, { Component } from 'react';
import {dogs} from './dog_data';
import Dog from './Dog'
import BreedButton from './BreedButton'

export default class DogList extends Component {

  doglist = dogs.map(dog => <Dog key={dog.id} dog={dog} />)
  const Breeds = [...new Set(dogs.map(dog => dog.breed))];
  filters = Breeds.map((breed, index) => <BreedButton key=index breed ={breed} />)

  render(){
    return(
      <div>
        <h1>Dog List</h1>
        {this.filters}
        {this.doglist}
      </div>
      
    )
  }
}