import React, {Component} from 'react';
import {dragons} from './dragon_data';
import Dragon from './Dragon'

export default class DragonList extends Component {
  dragonList = dragons.map(dragon => <Dragon key={dragon.id} dragon={dragon} />)

  render(){
    return(
      <div>
        <h1>Dragon List</h1>
        {this.dragonList}
      </div>
    )
  }
}