import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import NewTicket from './containers/newTicket';
import './style.css';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" >
        <Home />
      </Route>
      <Route path="/new-ticket">
        <NewTicket />
      </Route>
    </Switch>
  );
}

export default App;
