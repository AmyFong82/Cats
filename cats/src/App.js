import './App.css';
import CatList from './cat/CatList';
import DogList from './dog/DogList';
import PenguinList from './penguin/PenguinList';
import DragonList from './dragon/DragonList';
import { DoglistFunc } from './dog/DogListFunc';


function App() {
  return (
    <div>
      <DoglistFunc />
      <CatList />
      <DogList />
      <PenguinList />
      <DragonList />
    </div>

  );
}

export default App;
