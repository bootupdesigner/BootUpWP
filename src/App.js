import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-slideshow-image/dist/styles.css';

import Schedule from './components/Schedule';
import Menu from './components/Menu';
import BootUp from './components/BootUp';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Messenger from './components/Messenger';
import Contact from './components/Contact';
import Services from './components/Services';
import Banner from './components/Banner';
import WebsiteDesigns from './components/WebsiteDesigns';
import SeoImprovements from './components/SeoImprovements';
import Hosting from './components/Hosting';

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
    <Menu sticky="top" />
    <Banner />
    <Switch>
      <Route exact path="/" component={BootUp} />
      <Route exact path="/bootup" component={BootUp} />
      <Route exact path="/schedule" component={Schedule} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/seoimprovements" component={SeoImprovements} />
      <Route exact path="/websitedesigns" component={WebsiteDesigns} />
      <Route exact path="/hosting" component={Hosting} />
    </Switch>
    <Messenger />
    <Footer />
</Router>
  );
}

export default App;
