import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/tasks" component={TaskList} />
        <Route path="/add-task" component={AddTask} />
      </Switch>
    </Router>
  );
};

export default App;