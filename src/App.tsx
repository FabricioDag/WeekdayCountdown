import { useState } from 'react';
import './App.css';

import Counter from './components/Counter.tsx';
import ExpandableModal from './components/ExpandableModal.tsx';
import {Teste} from './components/Teste.tsx'


function App() {

  const [counters, setCounters] = useState([
    {
      title:'Teste',
      endDate:'01-31-2025'
    },
    {
      title:'Teste2',
      endDate:'03-01-2025'
    }
  ])

  const handleAddCounter = (counter) =>{
    let newCounters = [...counters,
    counter]

    setCounters(newCounters)
  }

  return (
    <div className="appWrapper">
      <Teste addCounter={handleAddCounter}/>
      {/* <ExpandableModal></ExpandableModal> */}
      <h2>Seus Contadores:</h2>
      <div className="countersWrapper">
        {counters &&
          counters.map((counter)=>(
            <Counter dataCounter={counter}/>
          ))}
      </div>
    </div>
  );
}

export default App;
