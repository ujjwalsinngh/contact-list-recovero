import React from "react";
import HomePage from "./pages/HomePage.js";
import CreateContact from "./pages/create-contact";
import { Routes, Route } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";

import contacts from "./reducers";

const store = configureStore({ reducer: contacts });

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage store={store} />} />
        <Route
          exact
          path="/create-contact"
          element={<CreateContact store={store} />}
        />
      </Routes>
    </div>
  );
}

export default App;
