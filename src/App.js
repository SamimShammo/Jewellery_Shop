
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Explore from './pages/Home/Explore/Explore';
import Purchase from './pages/Home/Purchase/Purchase';
import Register from './pages/Login/Register/Register';
import Login from './pages/Login/Login/Login';
import AuthProvider from './pages/context/AuthProvider/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashoard/Dashboard/Dashboard';
import Notfound from './pages/Notfound/Notfound';







function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/Explore">
              <Explore></Explore>
            </Route>
            <PrivateRoute exact path="/purchase/:id">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>

        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
