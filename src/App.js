 import { store } from "./components/reduxStore/reducer"
 import { Provider } from "react-redux"
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header';
import Home from "./components/Home"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Checkout from './components/Checkout';
import Login from "./components/Login";
import Password_retreive from "./components/Password_retreive"

function App() {
  return (
    <Provider store={ store }>
    <Router>
    <div className="App">
        <div className="navbar2">
            <Switch>
              <Route exact path = "/login">
                <Login />
              </Route>
              <Route exact path = "/Password_retreive">
                <Password_retreive />
              </Route>
              <Route exact path="/">
              <Header />
            <Home />
            </Route>
              <Route exact path="/checkout">
              <Header />
             <Checkout />
            </Route>
              <Route>
              <Header />
              <h2>Page Not Found</h2>
            </Route>
        </Switch>
      </div>
      </div>
    </Router>
      </Provider>
    
  );
}

export default App;
