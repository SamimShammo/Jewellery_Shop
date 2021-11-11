
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import Explore from './pages/Home/Explore/Explore';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Purchase from './pages/Home/Purchase/Purchase';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
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
          <Route exact path="/purchase/:id">
            <Purchase></Purchase>
          </Route>
          <Route exact path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
