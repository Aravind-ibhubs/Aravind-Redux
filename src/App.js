import { useState, useContext, createContext } from "react";
import B from "./components/B";
import C from "./components/C";
import './App.css';

export const UserName = createContext("Harry potter");
export const SeriesNumber = createContext();

function App() {
  const [count, setCount] = useState(100);

  return (
    <div className="App">
      <h1>This is A component</h1>
      <hr />
      <UserName.Provider value="Maglet">
        <SeriesNumber.Provider value={2324}>
          <div className="componentBlock">
            <B info={count} />
            <C info={count} />
          </div>
        </SeriesNumber.Provider>
      </UserName.Provider>
    </div>
  );
}

export default App;
