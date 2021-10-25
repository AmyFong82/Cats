import React, {Component} from 'react';
import dragons from './dragon_data';

export default class DragonList extends Component {
  dragonList = () => {dragon => <Dragon key={dragon.id} dragon={dragon} />}

  render(){
    return(this.dragonList)
  }
}