import React from 'react';
import Sidebar from './components/layout/Sidebar'
import Navbar from './components/layout/Navbar'
import {HashRouter, Route} from 'react-router-dom'
import Alphabet from './components/features/Alphabet'
import Home from './components/features/Home'

function App() {
  return (
      <HashRouter>
        <div className="App">
          <Navbar/>
          <div className="main-layout">
            <Sidebar/>
            <Route exact path='/' component={Home}/>
            <Route path='/azbuka' component={Alphabet}/>
          </div>
        </div>
      </HashRouter>
  );
}

export default App;
