import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';

function App() {
  return (
    <>
    <div className="App">
      <h1>David Devine</h1>
      <h2>Junior Software Developer</h2>
    </div>
    <Router>
    <NavBar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/project1" element={<Project1/>}/>
      <Route path="/project2" element={<Project2/>}/>
      <Route path="/project3" element={<Project3/>}/>
      <Route path="/project4" element={<Project4/>}/>
      <Route path="task/:id" element={<Home />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  </Router>
  </>
  );
}

export default App;
