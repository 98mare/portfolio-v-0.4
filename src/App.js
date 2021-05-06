
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Contact from './Containers/DisplaySection/Contact';
import HomePage from './Containers/DisplaySection/HomePage';
import Work from './Containers/DisplaySection/Work';
import WorkPage from './Containers/DisplaySection/WorkPage';


function App(props) {
  return (
    <div className="App">

      <Router>

        <Route path='/' exact component={HomePage}>
          {/* <HomePage /> */}
        </Route>
        <Route path='/work' exact component={Work} >
          {/* <Work /> */}
        </Route>
        <Route path='/contact' exact component={Contact}>
          {/* <Contact /> */}
        </Route>
        <Route path='/work/:postId' exact component={WorkPage} >

        </Route>


      </Router>

    </div>
  );
}

export default App;
