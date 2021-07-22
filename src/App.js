import './App.css';
import './normalize.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';

import Home from './views/Home';
import Cart from './views/Cart';


export const DealsSelectedContext = createContext();


function App() {

  const [dealsSelected, setDealsSelected] = useState([]);
  
  return (
    <DealsSelectedContext.Provider value={ {dealsSelected, setDealsSelected} }>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/cart' component={Cart} />
        </Switch>
      </Router>
    </DealsSelectedContext.Provider>
  );
}

export default App;
