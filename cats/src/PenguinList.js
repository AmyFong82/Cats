import React, {Component} from "react"
import {penguins} from './penguin_data'
import Penguin from './Penguin'

export default class PenguinList extends Component {
  
  penguinList = penguins.map(penguin => <Penguin key={penguin.id} penguin={penguin} />)

  render(){
    return(
      <div>
        <h1>Penguin List</h1>
        {this.penguinList}
      </div>
    )
  }
}