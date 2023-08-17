import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import EquipmentList from "./components/EquipmentList";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Equipment List" exact element={<EquipmentList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
