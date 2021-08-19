import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import NewTicket from './containers/newTicket';
import NotFound from './containers/NotFound';
import './style.css';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" >
        <Home />
      </Route>ƒ
      <Route path="/new-ticket">
        <NewTicket />
      </Route>
      <Route>
        <NotFound />
      </Route>

    </Switch>
  );
}

export default App;
