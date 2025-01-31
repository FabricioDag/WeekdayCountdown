import { useState, useEffect } from "react";
import "./App.css";

import Counter from "./components/Counter.tsx";

import { Modal } from "./components/Modal.tsx";

function App() {
  const [counters, setCounters] = useState<
    { title: string; endDate: string | null }[]
  >(() => {
    const savedCounters = localStorage.getItem("counters");
    return savedCounters ? JSON.parse(savedCounters) : [];
  });

  useEffect(() => {
    localStorage.setItem("counters", JSON.stringify(counters));
  }, [counters]);

  const handleAddCounter = (counter: {
    title: string;
    endDate: string | null;
  }) => {
    let newCounters = [...counters, counter];

    setCounters(newCounters);
  };

  return (
    <div className="appWrapper">
      <Modal addCounter={handleAddCounter} />

      <h2>Seus Contadores:</h2>

      <div className="countersWrapper">
        {counters.length > 0 ? (
          counters.map((counter) => (
            <Counter
              dataCounter={{
                ...counter,
                endDate: counter.endDate || "",
              }}
            />
          ))
        ) : (
          <div>
            <h1>Nenhum contador adicionado</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
