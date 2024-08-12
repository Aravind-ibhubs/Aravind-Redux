import { useState, useContext, createContext } from "react";
import './App.css';
import Header from "./components/Header/Header";
import { Routes,Route } from "react-router-dom";
import Dashboard from "./components/Dasboard/Dashboard";
import NotFound from "./components/Not Found/NotFound";

export const UserName = createContext("Harry potter");
export const SeriesNumber = createContext();

function App() {

//   <div className="App"> = code for context
//   <UserName.Provider value="Maglet">
//     <SeriesNumber.Provider value={2324}>
//       <div className="componentBlock">
//         <Header />
//       </div>
//     </SeriesNumber.Provider>
//   </UserName.Provider>
// </div>

  return (
    <>
      <Header />  
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>  
    </>
  );
}

export default App;
