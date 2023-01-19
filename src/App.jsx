import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import Detalle from "./views/Detalle";
import Context from "./Context";


import './App.css';

function App() {
  const [listaPoke, setListaPoke] = useState([]);
  return (
    <div className="App">
    <Context.Provider value={{ listaPoke, setListaPoke }}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:nombre" element={<Detalle />} />
        </Routes>       
      </BrowserRouter>
      </Context.Provider>
     </div>
  );
}

export default App;
