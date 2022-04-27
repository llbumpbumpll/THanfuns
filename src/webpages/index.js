import React from 'react';
import {
  BrowserRouter as Router,
  Route
  
} from "react-router-dom";
import Home from './home';
import Aboutus from './aboutus';
const Webpages = () => {
    return(
        <Router>
            <Route exact path="/" component= {Home} />
            <Route path = "/aboutus" component = {Aboutus} />
        </Router>
    );
};
export default Webpages;