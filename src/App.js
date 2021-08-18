import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import BootUp from './components/BootUp';
import Request from './components/Request';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import Faqs from './components/Faqs';
import SeoImprovement from './components/SeoImprovement';
import EmailDesign from './components/EmailDesign';
import Revamp from './components/Revamp';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faFacebookMessenger,
  faFacebookF,
  faTwitter,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

library.add(fab, faFacebookMessenger, faFacebookF, faTwitter, faLinkedinIn);


function App() {
  return (
    <Router>
      <Menu />
      <Header />
      <Switch>
        <Route exact path="/" component={BootUp} />
        <Route exact path="/request" component={Request} />
        <Route exact path="/faqs" component={Faqs} />
        <Route exact path="/seoimprovement" component={SeoImprovement} />
        <Route exact path="/emaildesign" component={EmailDesign} />
        <Route exact path="/revamp" component={Revamp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
