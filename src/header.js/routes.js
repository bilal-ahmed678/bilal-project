import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Help,
  How,
  Detail,
  Navigation
} from "../Routecomponent"
import Main from '../component/main/Main';

const Routes = () => {
  return (
    <React.Fragment>
      <Router>
        <Navigation />
        <Switch>
        <Route exact path="/Detail" component={Detail}  />
          <Route exact path="/Help" component={Help} />
          <Route path="/How" component={How} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </React.Fragment>
  )
}
export default Routes