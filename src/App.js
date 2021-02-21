import './App.css';
import Header from "./Components/Header";
import Home from './Components/Home';
import About from './Components/About';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalProvider } from './Components/GlobalContext';

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalProvider>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </GlobalProvider>
      </div>
    </Router>
  );
}

export default App;
