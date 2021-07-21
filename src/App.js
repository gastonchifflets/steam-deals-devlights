import './App.css';
import './normalize.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './views/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/cart' component={Cart} />
        <Route exact path='/rentals' component={Rentals} /> */}
      </Switch>
    </Router>
  );
}

export default App;
