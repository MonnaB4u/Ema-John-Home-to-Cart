import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Header/Shop/Shop';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Inventory from './Component/Header/Inventory/Inventory';
import Review from './Component/Header/Review/Review';
import NotFound from './Component/Header/NotFound/NotFound';
import ProductDetail from './Component/Header/ProductDetail/ProductDetail';


function App() {
  return (
    <Router>
    <Switch>
   
    <Route  exact path="/"> <Header /> <Shop></Shop> </Route>
    <Route path="/shop"><Shop></Shop></Route>
    <Route path="/inventory"> <Inventory></Inventory> </Route>
    <Route path="/review"><Review></Review></Route>
    <Route path="/product/:productKey"><ProductDetail></ProductDetail></Route>
     <Route path="*"><NotFound></NotFound></Route>

    </Switch>
    </Router>

  );
}

export default App;
