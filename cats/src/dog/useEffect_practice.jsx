import {useEffect, useState} from 'react'
import { dogs } from './dogs_data'

export function Doglist {

  const doglist = dogs.map(dog => <li key={dog.id)>Name: {dog.name}, Age: {dog.age}, Sex: {dog.sex}</li>

  return(
    <div>
      <h1>Doglist</h1>
      {doglist}
    </div>
  )

}