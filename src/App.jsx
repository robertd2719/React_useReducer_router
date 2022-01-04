import "./styles.css";
import { useState, useReducer } from "react";
import Counter from "./components/Counter";
import NavBar from "./components/NavBar";
import TodoView from "./components/TodoView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes path="/">
          <Route path="counter" element={<Counter />} />
          <Route path="todo" element={<TodoView />} />
        </Routes>
      </div>
    </Router>
  );
}
