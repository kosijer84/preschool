import React from 'react';
import Sidebar from './components/layout/Sidebar'
import Navbar from './components/layout/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import Alphabet from './components/features/Alphabet'
import Home from './components/features/Home'

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <div className="d-flex">
            <Sidebar/>
            <Route exact path='/' component={Home}/>
            <Route path='/azbuka' component={Alphabet}/>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
