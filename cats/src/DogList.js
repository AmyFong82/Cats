import React, { Component } from 'react';
import {dogs} from './dog_data';
import Dog from './Dog'

export default class DogList extends Component {

  doglist = dogs.map(dog => <Dog key={dog.id} dog={dog} />)

  render(){
    return(
      <div>
        <h1>Dog List</h1>
        {this.doglist}
      </div>
      
    )
  }
}