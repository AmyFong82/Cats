import React, {Component} from 'react';
import {dragons} from './dragon_data';
import Dragon from './Dragon'

export default class DragonList extends Component {
  state = {
    select: "all"
  }

  dragonList = () => dragons.map(dragon => <Dragon key={dragon.id} dragon={dragon} select={this.state.select} />)

  showList = ({target: {value}}) => {
    return this.setState({select: value})
  }


  // showBoys = () => {
  //   this.setState({dragons: dragons.filter(dragon => dragon.gender === "boy")})
  // }

  // showGirls = () => {
  //   this.setState({dragons: dragons.filter(dragon => dragon.gender === "girl")})
  // }

  // showAll = () => this.setState({dragons: dragons})


  render(){
    return(
      <div>
        <h1>Dragon List</h1>
        <select name="select" id="select" onChange={this.showList}>
          <option value="all">All</option>
          <option value="boy">Boys</option>
          <option value="girl">Girls</option>
        </select>
        {this.dragonList()}
      </div>
    )
  }
}