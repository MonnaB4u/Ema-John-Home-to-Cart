import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Header/Shop/Shop';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
      
    <Route path="/">     <Header /> <Shop></Shop> </Route>

    </Switch>
    </Router>

  );
}

export default App;
