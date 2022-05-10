import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import FunctionalComp from './Components/FunctionalComponents';
import {ClassComp, ClassComp1} from './Components/ClassComponents';
import Click from './Click';
import Counter from './Counter';
import ParentComp from './ParentComp';

function App() {
  return (
    <div>
      <h1>Welcome to React tutorial</h1>
      <p>This is going to be very interesting</p>
      <FunctionalComp />
      <ClassComp />
      <ClassComp1 />
      <Click />
      <Counter />
      <ParentComp />
    </div>
   
  );
}

export default App;
