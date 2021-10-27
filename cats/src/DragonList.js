import React, {Component} from 'react';
import {dragons} from './dragon_data';
import Dragon from './Dragon'

export default class DragonList extends Component {
  state = {
    dragons: dragons
  }

  dragonList = () => this.state.dragons.map(dragon => <Dragon key={dragon.id} dragon={dragon} />)


  showBoys = () => {
    this.setState({dragons: dragons.filter(dragon => dragon.gender === "boy")})
  }

  showGirls = () => {
    this.setState({dragons: dragons.filter(dragon => dragon.gender === "girl")})
  }

  showAll = () => this.setState({dragons: dragons})


  render(){
    return(
      <div>
        <h1>Dragon List</h1>
        <button onClick={this.showBoys}>Boys Only</button> 
        <button onClick={this.showGirls}>Girls Only</button> 
        <button onClick={this.showAll}>Show All</button>
        {this.dragonList()}
      </div>
    )
  }
}