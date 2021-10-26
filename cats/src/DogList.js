import React, { Component } from 'react';
import {dogs} from './dog_data';
import Dog from './Dog'

export default class DogList extends Component {

  doglist = dogs.map(dog => <Dog key={dog.id} dog={dog} />)
  filters = dogs.map(dog => <Button key={dog.breed} breed ={dog.breed} />)

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