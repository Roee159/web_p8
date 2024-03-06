import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './components/homepage'; 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Switch>
            <Route exact path="/" component={Homepage} />
          </Switch>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
