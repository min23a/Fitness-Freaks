import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddAdmin from './Components/Admin/AddAdmin/AddAdmin';
import AddReview from './Components/Admin/AddReview/AddReview';
import AddService from './Components/Admin/AddService/AddService';
import Blog from './Components/Blog\'s/Blog';
import CheckoutPage from './Components/CheckoutPage/CheckoutPage';
import DashboardPage from './Components/DashboardPage/DashboardPage';
import ManageService from './Components/Admin/ManageService/MangeService';
import Home from './Components/HomePage/Home';
import Login from './Components/LoginPage/Login';
import PrivateRoute from "./Components/LoginPage/PrivateRoute/PrivateRoute"

export const dataContext = createContext();

function App() {
  const [user, setUser] = useState({
    name : '',
    email: '',
    role: 'user'
  });

  const [Locate, setLocate] = useState();
  return (
    <dataContext.Provider value={{ users: [user, setUser], local: [Locate, setLocate] }}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/blogs">
            <Blog />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <DashboardPage />
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin />
          </PrivateRoute>
          <PrivateRoute path="/manageService">
            <ManageService />
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <CheckoutPage />
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/addReview">
            <AddReview />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </dataContext.Provider>
  );
}

export default App;
