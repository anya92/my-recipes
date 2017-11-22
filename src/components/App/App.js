import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';

import Home from '../Home/Home';
import RecipeGrid from '../RecipeGrid/RecipeGrid';
import SingleRecipe from '../SingleRecipe/SingleRecipe';
import AddRecipe from '../AddRecipe/AddRecipe';
import EditRecipe from '../EditRecipe/EditRecipe';

const Container = styled.div`
  font-family: 'Pragati Narrow';
  color: #333;
  font-size: 17px;
  margin-left: auto;
  margin-right: auto;
`;

const App = () => (
  <Container>
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/breakfast" render={props => <RecipeGrid {...props} category="breakfast" />} />
        <Route path="/dinner" render={props => <RecipeGrid {...props} category="dinner" />} />
        <Route path="/desserts" render={props => <RecipeGrid {...props} category="dessert" />} />
        <Route path="/snacks" render={props => <RecipeGrid {...props} category="snacks" />} />
        <Route path="/drinks" render={props => <RecipeGrid {...props} category="drinks" />} />
        <Route exact path="/recipes" render={props => <RecipeGrid {...props} category="all" />} />
        <Route path="/recipes/:slug/edit" component={EditRecipe} />
        <Route path="/recipes/:slug" component={SingleRecipe} />
        <Route path="/add" component={AddRecipe} />
        <Route render={() => <h1>404 Not Found</h1>} />
      </Switch>
    </Router>
  </Container>
);

export default App;
