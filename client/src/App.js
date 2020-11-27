import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar';
import './App.css';
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' />
      </Switch>
    </Router>
  );
}

export default App;
