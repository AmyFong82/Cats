import {useEffect, useState} from 'react'
import { dogs } from './dogs_data'

export function DoglistFunc() {
  const [dogpic, setDogpic] = useState(["I'm a picture"])

  const doglist = dogs.map(dog => <li key={dog.id}>Name: {dog.name}, Age: {dog.age}, Sex: {dog.sex}</li>)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(resp => resp.json())
    .then(resp => setDogpic(resp.message))
  }, [])

  return(
    <div>
      <h1>Doglist</h1>
      <img src={dogpic} alt="random dog image" />
      {doglist}
    </div>
  )

}