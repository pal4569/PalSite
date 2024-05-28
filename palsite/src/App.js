import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Header';
import Landing from './pages/Landing';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route index element={
          <main>
            <Header />
            <Landing />
          </main>
        } />
        <Route path={'/contact'} element={
          <main>
            <Header />
            <Contact />
          </main>
        } /> 
      </Routes>
    </>
  );
}

export default App;