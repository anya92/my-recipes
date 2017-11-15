import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';

import Home from '../Home/Home';

const Container = styled.div`
  font-family: 'Pragati Narrow';
  color: #333;
  font-size: 17px;
  max-width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;

const App = () => (
  <Container>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route render={() => <h1>404 Not Found</h1>} />
      </Switch>
    </Router>
  </Container>
);

export default App;
