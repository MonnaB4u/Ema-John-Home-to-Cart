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
import Shipment from './Component/Shipment/Shipment';
import Login from './Component/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';




export const UserContext=createContext()

function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <div>
      <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      
    <Router>
    <Header></Header>
    
    <Switch>
    <Route  exact path="/"><Shop></Shop></Route>
    <Route path="/shop"><Shop></Shop></Route>
    <Route path="/inventory"> <Inventory></Inventory> </Route>
    <Route path="/review"><Review></Review></Route>
    <Route path="/product/:productKey"><ProductDetail></ProductDetail></Route>
    <PrivateRoute path="/shipment"> <Shipment></Shipment> </PrivateRoute>
    {/* <Route path="/shipment">  <Shipment></Shipment></Route> */}
    <Route path="/login"> <Login></Login> </Route>
     <Route path="*"><NotFound></NotFound></Route>

    </Switch>
    </Router>
    </UserContext.Provider>
    </div>
    
  );
}

export default App;
