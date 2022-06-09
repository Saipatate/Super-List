import { useState } from 'react';
import List from './components/List';
import './App.css';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([])

  return (
    <div className="App">
      <h1>My List</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
