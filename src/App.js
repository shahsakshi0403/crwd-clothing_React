import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch ,Route } from 'react-router-dom';

const HatsPage =() =>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
)
function App() {
  return (
    <div>
      <switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage}/>
        {/* <Route path='/' component={HomePage}></Route> */}
      </switch>
    </div>
  );
}

export default App;
