import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className='container'>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </div>
      </Router>
    </>
  );
}

export default App;
