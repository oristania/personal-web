import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Home} from './Home';
import {ComingSoon} from './ComingSoon'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About } from './About';
import Contact from './Contact';



export class App extends React.Component {
  render() {
   return ( 
     <Router>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portofolio" component={ComingSoon} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>

    </Router>
     
   )
  };
}