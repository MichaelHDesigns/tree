import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import UserList from "./pages/UserList";
import NavBar from "./components/NavBar";
import './App.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:userId" element={<List />} />
      </Routes>
    </Router>
  );
};

export default App;